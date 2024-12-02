const nodemailer = require("nodemailer");




function sendEmail(mailType, to_mail, userName, IP="") {

    // const IP = "192.168.179.5";
    // const userName = "Gyana Madhavan";
    const link = "/";
    const Welcome_HTML = `<div style="display: flex;justify-content: center; margin:30px ;">
                        <div style="display: flex;
                            flex-direction: column;
                            align-items: center;
                            border: 1px solid lightgray;
                            max-width: 500px;
                            height: 220px;
                            padding: 10px;
                            text-align: center;
                            gap: 10px;
                            box-shadow: 0px 30px 50px 0px rgb(0 0 0 / 20%);">
                            <h1 style="color: #2b3e51; text-transform: uppercase;">Welcome to SmartCart</h1>
                            <p>Hi <span style="color: #F94C66; font-weight: 800;text-transform: capitalize;">${userName}</span>, we're glad you're here! You can enjoy purchases and discover new discounts every week</p>
                            <a href=${link} style="padding: 10px 30px;background-color:#3AB0FF ; border-radius: 5px; border:none;color: white; font-size: 18px; font-weight: 500; text-decoration: none;cursor: pointer;width: 100px;">Login Now</a>
                        </div> 
                    </div>`;

    const Alert_HTML = ` <div style="display: flex; justify-content: center; margin: 30px;">
                        <div
                            style="
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            border: 1px solid lightgray;
                            max-width: 500px;
                            padding: 10px;
                            text-align: center;
                            gap: 10px;
                            box-shadow: 0px 30px 50px 0px rgb(0 0 0 / 20%);
                            "
                        >
                        <h1 style="color: #F24C4C; text-transform: uppercase">
                        Alert Mail!
                        </h1>
                        <p>
                        Hi <span style="color: #f94c66; font-weight: 800">${userName}</span>, Someone trying to access your account. SmartCart tracked them, but you should change your password now.
                        </p>
                        <div style="align-self: flex-start;margin: 16px 0px;">
                            <b>IP Address : ${IP}</b>
                        </div>
                        <a
                        href=${link}
                        style="
                            padding: 10px 30px;
                            background-color: #3ab0ff;
                            border-radius: 5px;
                            border: none;
                            color: white;
                            font-size: 18px;
                            font-weight: 500;
                            text-decoration: none;
                            cursor: pointer;
                            width: 300px;
                        "
                        >Change password</a>
                        </div>
                    </div>`;

    let MailTemplate="";
    let subject =""
    switch (mailType) {
        case "welcome":
            MailTemplate = Welcome_HTML
            subject = "Welcome Mail"
            break;
        case "alert":
            MailTemplate = Alert_HTML
            subject = "Alert Mail"
            break;
        default:
            MailTemplate=""
            break;
    }

    if (MailTemplate === ""){
        console.log("Mail Template not found")
        return
    }
    // const { to, subject, message } = data;
    const from = "gyanamadhavan@gmail.com";
    console.log(to_mail, subject);


    if(to_mail!==""& subject!==""){

        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "elogesh226@gmail.com",
            pass: "iaybjurkpucjlyvp",
        },
        });

        const mailOptions = {
        from: from,
        to: to_mail,
        subject: subject,
        html: MailTemplate,
        };

        transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            throw new Error("Failed to send Email!")
            // res.status(400).send("Failed to send Email!");
        } else {
            console.log("Email Sent" + info.response);
            res.status(200).send("Email Sent!");
        }
        });
    }
    else{
        console.log("To Mail ID or Subject is missing")
    }
}

module.exports = sendEmail;