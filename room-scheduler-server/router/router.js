import { Router } from "express";
// import { UserController } from "../controllers/user-controllers.js";
import { userController } from "../controllers/user-controllers.js";
import { body } from "express-validator";
import { authMiddleware } from "../middlewares/auth-middleware.js";

export const router = new Router();

// const userController = new UserController();

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);