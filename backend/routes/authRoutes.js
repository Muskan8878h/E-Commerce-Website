import express from 'express';
import { logout,login,registration } from '../controller/authController.js';

const authRoutes=express.Router();

authRoutes.post("/registration", registration);
authRoutes.post("/login",login);
authRoutes.post("/logout",logout);

export default authRoutes;