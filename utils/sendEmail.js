const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			// host: process.env.HOST,
			// service: process.env.SERVICE,
			// port: Number(process.env.EMAIL_PORT),
			// secure: Boolean(process.env.SECURE),
			// auth: {
			// 	user: process.env.USER,
			// 	pass: process.env.PASS,
			// },
			service: "gmail",
			host: "smtp.gmail.com",
			port: 587,
			secure: true,
			auth: {
			//   user: "sheylearnings@gmail.com",
			//   pass: "tpopnnfykrzwuiob",
			   user: "robinchuru123@gmail.com",
			  pass: "gzucuvgyiyniymon"
			},
		});

		await transporter.sendMail({
			from:"robinchuru123@gmail.com",
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
