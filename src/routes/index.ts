import { Router } from "express";
import { createUserRoutes } from "./createUser.routes";
import { listUserRoutes } from "./listUser.routes";
import { loginUserRouter } from "./loginUser.routes";

const router = Router();

router.use("/createUser", createUserRoutes);
router.use("/listUser", listUserRoutes);
router.use("/loginUser", loginUserRouter);

export { router }