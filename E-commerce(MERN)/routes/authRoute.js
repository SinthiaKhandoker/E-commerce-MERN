import express from 'express';
import { registerController, loginController, forgotPasswordController, verifyOTPController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import userModel from '../models/userModel.js';
import JWT from 'jsonwebtoken';

const router = express.Router();

// Routing
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forgot-password', forgotPasswordController);
router.get('/test', requireSignIn, isAdmin, (req, res) => res.send("Protected Routes"));
router.get("/user-auth", requireSignIn, (req, res) => res.status(200).send({ ok: true }));
router.post('/verify-otp', verifyOTPController);
export default router;
