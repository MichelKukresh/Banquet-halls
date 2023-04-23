const express = require('express');

// cors
const cors = require('cors');

// Слушаем 3000 порт
const { PORT = 3006 } = process.env;
const { celebrate, Joi } = require('celebrate');
const { errors } = require('celebrate');

// импортируем устанавливаем лимитер для исключения DoS атак npm i express-rate-limit
const rateLimit = require('express-rate-limit');

// использование helmet для простановки security-заголовков npm install --save helmet
const helmet = require('helmet');

// const mongoose = require('mongoose');

// logger
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { createUser, login } = require('./controllers/users');
const routesOffer = require('./routes/offer');
const routesContact = require('./routes/contact');
const routesCards = require('./routes/cards');
const routesUsers = require('./routes/users');
const routesBus = require('./routes/bus');
// const auth = require('./middlewares/auth');
const { regexLink } = require('./util/utilConst');
const ErrorNotFound = require('./errors/ErrorNotFound');
const centralizedErrorHandler = require('./middlewares/centralizedErrorHandler');
// const { putSpeedDay } = require('./controllers/bus');

const app = express();

// настраиваем устанавливаем лимитер для исключения DoS атак
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// подключаемся к серверу mongo
// mongoose.connect('mongodb://localhost:27017/mestodb', {
//   useNewUrlParser: true,
// });

app.use(cors());

app.use(express.json());

// используем устанавливаем лимитер для исключения DoS атак
app.use(limiter);
app.use(helmet());

// !!важно до роутов
app.use(requestLogger); // подключаем логгер запросов

// требуется удалить после ревью
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(regexLink),
  }),
}), createUser);

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

// app.use(auth);

// бесконечный цикл
// function intervalFunc() {
//   console.log('Cant stop me now!');
//   TestBus();
// }
// setInterval(intervalFunc, 10000);

// цикл одного раза для тестов
function speedDay() {
  console.log(Math.floor(+new Date() / 1000));
  // putSpeedDay(Math.floor(+new Date() / 1000));
}
speedDay();

app.use('/offer', routesOffer);
// {
//   "name": "name1",
//   "phone": "+79013437024" ,
//   "data": "12.12.2023" ,
//   "person": "10"
// }

app.use('/contact', routesContact);
// {
//   "name": "name1",
//   "phone": "+79013437024" ,
//   "email": "qwe@mail.ru",
//   "person": "10",
//   "comment": "Хочу заказать большой зал будет проводится банкет"
// }

app.use('/cards', routesCards); // запускаем

app.use('/users', routesUsers);

app.use('/bus', routesBus);

// !!важно до обработчика ошибок, но после маршрутов
app.use(errorLogger); // подключаем логгер ошибок

app.use(errors()); // обработчик ошибок celebrate

app.use('*', (req, res, next) => {
  next(new ErrorNotFound('Неправильный путь'));
});

// централизованный обработчик ошибок
app.use(centralizedErrorHandler);

app.listen(PORT, () => {
  // console.log(`App listening on port ${PORT}`);
});
