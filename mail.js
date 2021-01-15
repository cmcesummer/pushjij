var nodemailer = require("nodemailer");
module.exports = function mail(user, pass, html = "", to = "", title = "mail") {
  var mailTransport = nodemailer.createTransport({
    host: "smtp.qq.com",
    secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
    auth: {
      user,
      pass,
    },
  });
  var options = {
    from: `"你的" <${user}>`,
    to,
    subject: title,
    text: title,
    html,
  };
  const time1 = Date.now();
  mailTransport.sendMail(options, function (err, msg) {
    if (err) console.log(err);
    console.log(`[mail use]`, Date.now() - time1);
  });
};
