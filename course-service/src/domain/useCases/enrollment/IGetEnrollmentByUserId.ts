import { EnrollmentEntity } from "../../entities";

export interface IGetEnrollmentByUserId {
    execute(id:string):Promise<EnrollmentEntity[] | null>
}