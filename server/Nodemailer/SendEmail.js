
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const SES_CONFIG={
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
}

// console.log(SES_CONFIG);

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendmail = async (recipientEmail, name, msg,mail_sub) => {
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
            Data: `<h2>Hello, ${name} ${msg}</h2>`,
          },
          Text: {
            Charset: 'UTF-8',
            Data: `Hello, ${name} ${msg}`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: mail_sub,
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


