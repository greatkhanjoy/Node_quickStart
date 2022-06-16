const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmail = async (req, res) =>{
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'greatjoykhan@gmail.com',
        from: '"FlairBees 👻" <73nkuchan@gmail.com>',
        subject: 'Sending Email using Node.js',
        html: '<h1>Welcome</h1>'
    }

    const info = await sgMail.send(msg);
   
    if(info[0].statusCode !== 202){
        return res.status(500).json({msg:'failed'})
    }
    res.status(200).json({msg: 'success'})
}


const sendEmailEtherial = async (req, res) =>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'justine.rempel84@ethereal.email',
            pass: 'zAj1c6AtFtcmdW39YP'
        }
    });

    let info = await transporter.sendMail({
        from: '"FlairBees 👻" <greatjoykhan@gmail.com>',
        to: 'joy@mail.com',
        subject: 'Sending Email using Node.js',
        html: '<h1>Welcome</h1>'
    })
    res.status(200).json(info)
}

module.exports = {sendEmail, sendEmailEtherial}