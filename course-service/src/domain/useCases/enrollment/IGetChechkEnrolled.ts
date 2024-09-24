import { EnrollmentEntity } from "../../entities";

export interface IGetChechkEnrolled {
    execute(courseId:string,userId:string):Promise<EnrollmentEntity | null | boolean>
}