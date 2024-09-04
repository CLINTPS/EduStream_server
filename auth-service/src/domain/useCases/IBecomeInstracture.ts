import { InstructorEntity, UserEntity } from "../../domain/entites";

export interface IBecomeInstracture {
    execute(instructorData:InstructorEntity):Promise<UserEntity | null>
}