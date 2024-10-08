import * as repositories from "../infrastructure/database/mongoDB/repositories";
import * as useCases from "../application/useCases"
import { IDependencies } from "../application/interface/IDependencies";

export const dependencies:IDependencies = {
    repositories,
    useCases
}