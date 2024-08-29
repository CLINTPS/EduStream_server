import { genSalt,hash} from 'bcrypt'

export const hashPassword = async (password:string)=>{
    try {
        const salt= await genSalt(10)
        const hashedPassword=await hash(password,salt)
        console.log("hashedPassword",hashedPassword);
        if(!hashedPassword){
            throw new Error("Password hashing time error.....")
        }
        return hashedPassword;
    } catch (error:any) {
        throw new Error(error?.message)
    }
}