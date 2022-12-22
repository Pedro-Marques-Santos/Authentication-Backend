import { Router } from "express";
import { createUserRoutes } from "./createUser.routes";
import { listUserRoutes } from "./listUser.routes";
import { loginUserRouter } from "./loginUser.routes";
import { profileUserRouter } from "./profileUser.routes";

const router = Router();

router.use("/createUser", createUserRoutes);
router.use("/listUser", listUserRoutes);
router.use("/loginUser", loginUserRouter);
router.use("/ProfileUser", profileUserRouter);

export { router }