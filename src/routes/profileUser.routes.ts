import { Router } from "express";
import { ProfileUserController } from "../modules/users/useCases/ProfileUser/ProfileUserController";

const profileUserRouter = Router();

const profileUserController = new ProfileUserController();

profileUserRouter.post("/", (request, respose) => {
  profileUserController.handle(request, respose);
});

export { profileUserRouter }