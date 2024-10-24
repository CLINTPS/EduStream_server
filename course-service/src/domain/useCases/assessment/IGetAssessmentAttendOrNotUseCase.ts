import ResultEntity from "../../entities/resultEntity";

export interface IGetAssessmentAttendOrNotUseCase {
    execute (userId:string,examId:string):Promise<ResultEntity[] | null >
}