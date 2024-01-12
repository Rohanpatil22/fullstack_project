import Nodemailer from 'nodemailer';

const transporter = Nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'joshuah.daugherty@ethereal.email',
        pass: 'QamqQzDfWxt7SZ3vSM'
    }
});




const Sendmail=async(info)=>{

        const Info= await transporter.sendMail(info);
}

export default Sendmail;