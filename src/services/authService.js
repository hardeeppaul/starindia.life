/**
 * Star India - Authentication Service
 * 
 * Interacts with the existing Star India PHP/MySQL backend endpoints.
 * Architecture:
 * - Login.jsx / Signup.jsx -> authService.js -> AUTH_API -> Existing PHP Backend -> MySQL
 */

import { AUTH_API } from '../config/authApi';

/**
 * Extracts error or status message from backend HTML / swal responses
 * @param {string} htmlResponse - HTML string returned by PHP
 * @returns {string|null}
 */
export function extractBackendMessage(htmlResponse) {
  if (!htmlResponse || typeof htmlResponse !== 'string') return null;

  // Check for sweetalert pattern: swal("Error!", 'message', "error")
  const swalMatch = htmlResponse.match(/swal\s*\(\s*["'][^"']*["']\s*,\s*['"]([^'"]+)['"]/i);
  if (swalMatch && swalMatch[1]) {
    return swalMatch[1].trim();
  }

  // Check for alert message div: <div class='alert-message'><span><strong>Error! </strong>Message</span></div>
  const alertMatch = htmlResponse.match(/class=['"]alert-message['"][^>]*>[\s\S]*?<span>(?:<strong>[^<]*<\/strong>)?\s*([^<]+)<\/span>/i);
  if (alertMatch && alertMatch[1]) {
    return alertMatch[1].replace(/&nbsp;/g, ' ').trim();
  }

  // Check generic alert text
  const genericAlertMatch = htmlResponse.match(/class=['"]alert[^'"]*['"][^>]*>([\s\S]*?)<\/div>/i);
  if (genericAlertMatch && genericAlertMatch[1]) {
    const cleanText = genericAlertMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (cleanText) return cleanText;
  }

  return null;
}

/**
 * Submits a native HTML form directly to the existing PHP backend.
 * This ensures cookies (PHPSESSID) and server redirects operate seamlessly
 * without cross-origin script blocking.
 * 
 * @param {string} endpoint - The PHP endpoint URL
 * @param {Object} fields - Key-value map of form fields
 */
export function submitDirectAuthForm(endpoint, fields) {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = endpoint;
  form.style.display = 'none';

  Object.entries(fields).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    }
  });

  document.body.appendChild(form);
  form.submit();
}

/**
 * Verifies a sponsor ID in real-time using existing ajax_sponsor.php
 * @param {string} sponsorId - Referral / Sponsor User ID
 * @param {string} token - Optional session CSRF token
 * @returns {Promise<{ valid: boolean, name?: string, raw?: string }>}
 */
export async function verifySponsor(sponsorId, token = '') {
  if (!sponsorId || !sponsorId.trim()) {
    return { valid: false, message: 'Please enter a Sponsor / Referral ID' };
  }

  try {
    const url = new URL(AUTH_API.VERIFY_SPONSOR);
    url.searchParams.set('k', sponsorId.trim());
    if (token) {
      url.searchParams.set('token', token);
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      credentials: 'omit',
      headers: {
        'Accept': 'text/html, text/plain, */*'
      }
    });

    if (!response.ok) {
      return { valid: true, raw: 'Server reachable' }; // fallback gracefully
    }

    const text = (await response.text()).trim();

    if (text.toLowerCase().includes('not found') || text.toLowerCase().includes('invalid token')) {
      return { valid: false, message: text || 'Sponsor ID not found' };
    }

    return {
      valid: true,
      name: text,
      raw: text
    };
  } catch (err) {
    // If CORS or network issue, don't block user from submitting
    console.warn('Sponsor verification network notice:', err);
    return { valid: true, unverified: true };
  }
}

/**
 * Authenticates user credentials with existing Star India PHP backend
 * 
 * Expected PHP fields:
 * - user_id (string)
 * - password (string)
 * - token (hidden token)
 * - submit ("Sign in" / "submit")
 * 
 * @param {Object} credentials
 * @param {string} credentials.userId - Member / User ID
 * @param {string} credentials.password - Account Password
 * @param {string} [credentials.token] - Optional CSRF token
 * @returns {Promise<{ success: boolean, message?: string, redirectUrl?: string }>}
 */
export async function loginUser({ userId, password, token = '' }) {
  if (!userId || !password) {
    throw new Error('User ID and Password are required.');
  }

  const formData = new URLSearchParams();
  formData.append('user_id', userId.trim());
  formData.append('password', password);
  formData.append('submit', 'Sign in');
  if (token) {
    formData.append('token', token);
  }

  try {
    const response = await fetch(AUTH_API.LOGIN, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html, application/json, */*'
      },
      body: formData.toString()
    });

    const responseText = await response.text();

    // Check for explicit error messages from backend
    const errorMessage = extractBackendMessage(responseText);
    if (errorMessage) {
      return {
        success: false,
        message: errorMessage
      };
    }

    // If redirected or status 200 without error alert, login succeeded
    if (response.ok && !responseText.includes('alert-danger') && !responseText.includes('swal("Error!"')) {
      return {
        success: true,
        redirectUrl: AUTH_API.DASHBOARD_HOME,
        message: 'Login successful. Redirecting to member dashboard...'
      };
    }

    return {
      success: false,
      message: errorMessage || 'Invalid User ID or Password'
    };
  } catch (err) {
    // If browser CORS restrictions prevent direct AJAX from localhost/other origin,
    // fallback to seamless native form submission
    console.info('Direct fetch notice; falling back to direct auth submission:', err);
    
    // Perform direct form submission to the existing PHP endpoint
    submitDirectAuthForm(AUTH_API.LOGIN, {
      user_id: userId.trim(),
      password: password,
      token: token,
      submit: 'Sign in'
    });

    return {
      success: true,
      submitting: true,
      message: 'Connecting securely to Star India Member Portal...'
    };
  }
}

/**
 * Registers a new member account with existing Star India PHP backend
 * 
 * Expected PHP fields:
 * - sponsor_id (string)
 * - position ("Left" | "Right")
 * - fname (string - Full Name)
 * - email (string)
 * - mobile (string)
 * - lpass (string - Password)
 * - chk_u ("on" - Agreement)
 * - adduser ("Create Account" / "adduser")
 * - token (hidden token)
 * 
 * @param {Object} userData
 * @returns {Promise<{ success: boolean, message?: string, redirectUrl?: string }>}
 */
export async function signupUser({
  sponsorId,
  position = 'Left',
  fullName,
  email,
  mobile,
  password,
  agreed = true,
  token = ''
}) {
  if (!sponsorId || !fullName || !email || !mobile || !password) {
    throw new Error('All required registration fields must be filled.');
  }

  // Format position to proper case expected by PHP: "Left" or "Right"
  const formattedPosition = position.toLowerCase() === 'right' ? 'Right' : 'Left';

  const formData = new URLSearchParams();
  formData.append('sponsor_id', sponsorId.trim());
  formData.append('position', formattedPosition);
  formData.append('fname', fullName.trim());
  formData.append('email', email.trim());
  formData.append('mobile', mobile.trim());
  formData.append('lpass', password);
  formData.append('chk_u', agreed ? 'on' : '');
  formData.append('adduser', 'Create Account');
  if (token) {
    formData.append('token', token);
  }

  try {
    const response = await fetch(AUTH_API.SIGNUP, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html, application/json, */*'
      },
      body: formData.toString()
    });

    const responseText = await response.text();

    // Check for error in response
    const errorMessage = extractBackendMessage(responseText);
    if (errorMessage) {
      return {
        success: false,
        message: errorMessage
      };
    }

    if (response.ok && !responseText.includes('alert-danger') && !responseText.includes('swal("Error!"')) {
      return {
        success: true,
        redirectUrl: AUTH_API.LOGIN,
        message: 'Account created successfully! Redirecting to login...'
      };
    }

    return {
      success: false,
      message: errorMessage || 'Registration could not be completed. Please check your details.'
    };
  } catch (err) {
    // If CORS prevents fetch, submit native form to PHP backend directly
    console.info('Direct fetch notice; falling back to direct registration submission:', err);

    submitDirectAuthForm(AUTH_API.SIGNUP, {
      sponsor_id: sponsorId.trim(),
      position: formattedPosition,
      fname: fullName.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      lpass: password,
      chk_u: 'on',
      token: token,
      adduser: 'Create Account'
    });

    return {
      success: true,
      submitting: true,
      message: 'Submitting registration details to Star India database...'
    };
  }
}

export default {
  loginUser,
  signupUser,
  verifySponsor,
  submitDirectAuthForm,
  extractBackendMessage
};
