
import Nodemailer from 'nodemailer';

const transporter = Nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'joshuah.daugherty@ethereal.email',
        pass: 'QamqQzDfWxt7SZ3vSM'
    }
});

export default transporter;