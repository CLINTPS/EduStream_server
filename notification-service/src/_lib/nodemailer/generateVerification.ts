import nodemailer from 'nodemailer'

export const generateVerification = async (
    email:string,
    title:string,
    body:string
):Promise<void>=>{
    try {
        let transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        });

        let info=await transporter.sendMail({
            from:"EduStream Email verification",
            to:email,
            subject:title,
            html:body
        })
        

    } catch (error:any) {
        console.error("Failed to send email",error.message);
        throw error
    }
}