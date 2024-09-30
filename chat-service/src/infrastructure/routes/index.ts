import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies:IDependencies) => {
    const {
        createChat
    }=controllers(dependencies)

    const router = Router()

    router.route("/").post(createChat)

    return router 
}