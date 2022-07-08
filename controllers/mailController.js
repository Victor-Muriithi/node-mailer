const nodemailer =require ('nodemailer');

exports.sendEmail = async (req, res)=>{
    try {
    let transpoter = nodemailer.createTransport({
       host:'smtp.outlook.com',
       port:587,
       secure:false, // true for 465, false for other ports
       auth:{
            user: 'sekanixv@outlook.com',
            pass:'p#B4^J+KkH,dVKu'
       }
    });

    let message = {
        from:'sekanixv@outlook.com',
        to:'vmuriithi10@gmail.com, victorxv15@gmail.com',
        subject:'Using nodemailer to send emails',
        text:'if you are seeing this it worked',
        attachments:[
            { //string as an attachment
                filename:'file1.txt',
                content:'This is a txt file!'
            },
            { //file as an attachment
                filename:'file2',
                path:'/home/victor/Documents/vs code/node js/node mailer/index.js'
            }
        ],

    }
    await transpoter.sendMail(message, (error, info) => {
            if (error) {
                console.log(error);
                return;
            }
            res.send(info);
        });
        
    } catch (error) {
      console.log(error)  
    }
}

