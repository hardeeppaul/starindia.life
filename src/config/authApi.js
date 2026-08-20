/**
 * Star India - Authentication API Configuration
 * 
 * Central configuration file for all authentication endpoints.
 * Discovered from the existing live Star India platform (https://starindia.life).
 * 
 * Backend Architecture:
 * - Language: PHP (PHP 8.2+ running on LiteSpeed Web Server)
 * - Database: MySQL
 * - Session/Auth: PHP Session Cookies (PHPSESSID)
 * - Request Method: HTTP POST
 * - Request Encoding: application/x-www-form-urlencoded / FormData
 */

// In development, empty string uses Vite's proxy configured in vite.config.js to bypass CORS
// In production, uses configured VITE_API_BASE_URL or canonical production domain
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL !== undefined
  ? import.meta.env.VITE_API_BASE_URL
  : (import.meta.env.DEV ? '' : 'https://starindia.life');

export const AUTH_API = {
  // Existing Star India Login API
  // Endpoint: /dashboard/ or /dashboard/index.php
  // Method: POST
  // Fields: token, user_id, password, submit
  LOGIN: `${API_BASE_URL}/dashboard/index.php`,

  // Existing Star India Signup / Registration API
  // Endpoint: /dashboard/register.php
  // Method: POST
  // Fields: token, sponsor_id, position (Left/Right), fname, email, mobile, lpass, chk_u (on), adduser
  SIGNUP: `${API_BASE_URL}/dashboard/register.php`,

  // Existing Star India Sponsor / Referral Verification API
  // Endpoint: /dashboard/ajax_sponsor.php
  // Method: GET
  // Query Params: k (sponsor_id), token
  VERIFY_SPONSOR: `${API_BASE_URL}/dashboard/ajax_sponsor.php`,

  // Existing Star India Forgot Password URL
  FORGOT_PASSWORD: `https://starindia.life/dashboard/forgot-password.php`,

  // Existing Star India Member Dashboard Home
  DASHBOARD_HOME: `https://starindia.life/dashboard/`
};

export default AUTH_API;
