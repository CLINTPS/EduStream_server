import { AssessmentEntity } from "../../entities";

export interface IGetAssessmentResultUseCase {
    execute (id:string):Promise<AssessmentEntity | null>
}