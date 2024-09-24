import { generateVerification } from "./index";

export const rejectInstructorFunction = async (email: any) => {
    try {
        await generateVerification(
          email,
          "Instructor Request Rejected",
          `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Instructor Request Rejected</title>
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
                        background-color: #d32f2f;
                        color: #ffffff;
                        padding: 10px 20px;
                        border-radius: 5px;
                        text-align: left;
                    }
            
                    .rejection-content {
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
                        <h1>Instructor Request Rejected</h1>
                    </div>
                    <div class="rejection-content">
                      <p>Dear User,</p>
                      <p>We regret to inform you that your request to become an instructor on EduStream has been rejected after careful consideration.</p>
                      <p>We value your interest in our platform, but unfortunately, your application did not meet the necessary criteria at this time.</p>
                      <p>If you have any questions or would like feedback on your application, please feel free to contact our support team for further clarification.</p>
                      <p>Thank you for your time and understanding, and we wish you the best in your future endeavors.</p>
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
        console.log("error", error);
    }
};
