import {sendOtp,signUpUser,loginUser,forgotPassword,resetPassword,checkForToken} from "../controllers/user.controller.js";
import { Router } from "express";
import { User } from "../models/user.model.js";

const userRouter = Router();

userRouter.post("/send-otp", sendOtp);

userRouter.post("/signup", signUpUser);

userRouter.post("/login", loginUser);

userRouter.post("/forgot-password", forgotPassword);

userRouter.post("/reset-password", resetPassword);

userRouter.use(checkForToken);

userRouter.get("/get-user-details", async(req, res) => {
    const email = res.locals.email;

    const user = await User.findOne({ email });
            
    res.status(200).json({user});
})

export { userRouter };