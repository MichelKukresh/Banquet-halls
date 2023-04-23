const nodemailer = require('nodemailer');

module.exports.sendAnContact = (req, res, next) => {
  const {
    name, phone, email, person, comment,
  } = req.body;

  console.log(req.body);
  res.send(
    {
      name,
      phone,
      email,
      person,
      comment,
    },
  );

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'banquethalls@mail.ru',
      pass: 'awsfQqWLwSSJBrrVzeEd',
      // pass: 'test123!123test', awsfQqWLwSSJBrrVzeEd
    },
  });

  const mailOptions = {
    from: 'banquethalls@mail.ru',
    to: 'banquethalls@mail.ru',
    subject: 'New Form Submission',
    text: `Добрый день, поступила новая заявка!\n\n Имя: ${name}\nТелефон: ${phone} \nEmail: ${email} \nКоличество персон: ${person}\n\n Комментарии: ${comment}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      // console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
};
