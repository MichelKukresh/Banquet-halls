const routesContact = require('express').Router(); // создали роутер
const { celebrate, Joi } = require('celebrate');

const { sendAnContact } = require('../controllers/contact');

routesContact.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    phone: Joi.string().required(),
    email: Joi.string().required().email(),
    person: Joi.string().required(),
    comment: Joi.string(),
  }),
}), sendAnContact);

module.exports = routesContact; // экспортировали роутер
