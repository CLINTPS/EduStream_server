import { generateVerification } from "./index";

export const acceptInstuctoreFunction = async (email: any) => {
    try {
        // console.log(email,'email got in acce......');
        
        await generateVerification(
          email,
          "Instructore Request Verified",
          `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Instructore Request Verified</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
        
                    h2 {
                      font-weight:500;
                      color: #6b7280;
                    }
            
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 40px;
                        border-radius: 10px;
                        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
                    }
            
                    .logo {
                        display: block;
                        margin: 0 auto 20px;
                    }
            
                    .header {
                        background-color: #0A900A;
                        color: #ffffff;
                        padding: 10px 20px;
                        border-radius: 5px;
                        text-align: left;
                    }
            
                    .otp-content {
                        margin-top: 30px;
                        font-size: 18px;
                        color: #333;
                        text-align: left;
                        background-color: #f9f9f9;
                        border: 1px solid #ddd;
                        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        border-radius: 5px;
                    }
        
                    .otp-nb {
                      font-size: 14px;
                    }
            
                    .otp-code {
                        font-size: 24px;
                        font-weight: bold;
                        color: #000000;
                    }
            
                    .footer {
                        margin-top: 30px;
                        font-size: 14px;
                        color: #555;
                        text-align: left;
                    }
                </style>
            </head>
            
            <body>
                <div class="container">
                    <h2>EduStream</h2>
                    <div class="header">
                        <h1>Instructore Request Verified</h1>
                    </div>
                    <div class="verification-success-content">
                      <p>Dear User,</p>
                      <p>Congratulations! Your request to become an instructor has been successfully verified and accepted.</p>
                      <p>We are excited to have you onboard and look forward to seeing the great content you'll bring to our platform.</p>
                      <p>If you have any questions or need further assistance, please don't hesitate to reach out to our support team.</p>
                      <p>Thank you for joining us, and welcome to the community!</p>
                      <p>Best regards,</p>
                      <p>The EduStream Team</p>
                    </div>
                    <div class="footer">
                        <p>Best regards,</p>
                        <p>EduStream</p>
                        <p>&copy; 2024 EduStream. All rights reserved.</p>
                    </div>
                </div>
            </body>
            
            </html>
            
            `
        );
    } catch (error) {
        console.log("eroor",error);
        
    }
};
