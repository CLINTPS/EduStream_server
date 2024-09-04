import { InstructorRejectEntity, UserEntity } from "../entites";

export interface IRejectInstructorUseCase {
    execute(rejectResonData:InstructorRejectEntity):Promise<UserEntity | null>
}