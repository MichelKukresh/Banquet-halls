const routesOffer = require('express').Router(); // создали роутер
const { celebrate, Joi } = require('celebrate');

const { sendAnOffer } = require('../controllers/offer');

routesOffer.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    phone: Joi.string().required(),
    data: Joi.string().required(),
    person: Joi.string().required(),
  }),
}), sendAnOffer);

module.exports = routesOffer; // экспортировали роутер
