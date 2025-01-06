const { body, validationResult } = require("express-validator");


const validateUser = [
    body("email").trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(), 
    body('username')
      .isString()
      .trim()
      .isLength({ min: 3, max: 20 })
      .withMessage('Username must be between 3 and 20 characters')
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage('Username can only contain letters, numbers, and underscores'),

      body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/\d/)
      .withMessage('Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage('Password must contain at least one special character'),
  ];


module.exports = validateUser