import { EnrollmentEntity } from "../../entities";

export interface IGetEnrollment {
    execute(id:string):Promise<EnrollmentEntity | null >
}