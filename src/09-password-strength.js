/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (!password || typeof password !== 'string') return "weak";

  let criteria = 0;
  const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
  const AZ = /[A-Z]/;
  const az = /[a-z]/;
  const numbers = /[0-9]/;

  if (password.length >= 8) criteria++;
  if (regex.test(password)) criteria++;
  if (AZ.test(password)) criteria++;
  if (az.test(password)) criteria++;
  if (numbers.test(password)) criteria++;


  if (criteria >= 0 && criteria <= 1) {
    return "weak";
  }
  if (criteria >= 2 && criteria <= 3) {
    return "medium";
  } if (criteria === 4) {
    return "strong";
  } if (criteria === 5) {
    return "very strong";
  }
}
