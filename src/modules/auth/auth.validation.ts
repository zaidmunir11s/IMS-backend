import { body } from "express-validator";

export const registerValidation = [
  body("name").notEmpty().withMessage("Full name is required"),
  body("email").isEmail().withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export const loginValidation = [
  body("identifier")
    .notEmpty()
    .withMessage("Please provide a valid email address or username"),
  body("password").exists().withMessage("Password is required"),
];
