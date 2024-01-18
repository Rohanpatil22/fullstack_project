// import Nodemailer from 'nodemailer';

// const transporter = Nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'joshuah.daugherty@ethereal.email',
//         pass: 'QamqQzDfWxt7SZ3vSM'
//     }
// });




// const Sendmail=async(info)=>{

//         const Info= await transporter.sendMail(info);
// }

// export default Sendmail;

import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const SES_CONFIG={
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
}

console.log(SES_CONFIG);

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendmail = async (recipientEmail, name) => {
    let params = {
      Source: 'rohanpatil1797@gmail.com',
      Destination: {
        ToAddresses: [
          recipientEmail
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<h2>Hello, ${name} You have successfully logged in</h2>`,
          },
          Text: {
            Charset: 'UTF-8',
            Data: `Hello, ${name}You have successfully logged in`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Succesful Login.`,
        }
      },
    };

    try{
        const res= await AWS_SES.sendEmail(params).promise();
        console.log("Email sent successfully.");
    }
    catch(err){

        console.log(err);
    }
   
    
};

export default sendmail;


