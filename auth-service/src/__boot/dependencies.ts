import { IDependencies } from "../application/interfaces/IDependencies";
import * as repositories from '../infrastructure/database/mongoDB/repostories';
import * as useCases from '../application/useCases';


export const dependencies:IDependencies ={
    repositories,
    useCases
};