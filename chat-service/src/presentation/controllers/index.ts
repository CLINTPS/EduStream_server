import { IDependencies } from "../../application/interfaces/IDependencies"
import { createChatController } from "./createChatController"

export const controllers = (dependencies:IDependencies) => {
    return {
        createChat:createChatController(dependencies)
    }
}