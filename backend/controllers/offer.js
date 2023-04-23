const nodemailer = require('nodemailer');

module.exports.sendAnOffer = (req, res, next) => {
  const {
    name, phone, data, person,
  } = req.body;

  console.log(req.body);
  res.send(
    {
      name,
      phone,
      data,
      person,
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
    text: `Добрый день, поступил новый заказ!\n\n Имя: ${name}\nТелефон: ${phone}\nДата: ${data}\nКоличество персон: ${person}`,
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
