import { userEditProfileEntity, UserEntity } from "../../domain/entites";

export interface IUserEditProfileUseCase {
    execute(data:userEditProfileEntity):Promise<UserEntity | null>
}