import { AssessmentEntity } from "../../entities";

export interface IGetAssessment {
    execute (id:string):Promise<AssessmentEntity | null>
}