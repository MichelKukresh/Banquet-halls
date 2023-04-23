const routesBus = require('express').Router(); // создали роутер
const { celebrate, Joi } = require('celebrate');

const { createBus } = require('../controllers/bus');
const { allBus } = require('../controllers/bus');
const { deleteBus } = require('../controllers/bus');

// const { regexLink } = require('../util/utilConst');

routesBus.post('/', celebrate({
  body: Joi.object().keys({
    // number: Joi.string().required().min(2).max(30),
    // park: Joi.string().required().min(2).max(30),
    // model: Joi.string().required().min(2).max(30),
    // comment1: Joi.string().required().min(2).max(30),
    // comment2: Joi.string().required().min(2).max(30),
    // comment3: Joi.string().required().min(2).max(30),
    // comment4: Joi.string().required().min(2).max(30),
    // comment5: Joi.string().required().min(2).max(30),

    brand: Joi.string().required().min(2).max(30),
    model: Joi.string().required().min(2).max(30),
    garageNumber: Joi.string().required().min(2).max(30),
    organization: Joi.string().required().min(2).max(30),
    stateNumber: Joi.string().required().min(2).max(30),
    parkNumber: Joi.string().required().min(2).max(30),
    parkName: Joi.string().required().min(2).max(30),
    protocol1: Joi.string().required().min(2).max(30),
    protocol2: Joi.string().required().min(2).max(30),
    protocol3: Joi.string().required().min(2).max(30),
    numberDoors: Joi.string().required().min(2).max(30),
    client: Joi.number().required().min(2),
    comment1: Joi.string().required().min(2).max(30),
    comment2: Joi.string().required().min(2).max(30),
    comment3: Joi.string().required().min(2).max(30),
    comment4: Joi.string().required().min(2).max(30),
    comment5: Joi.string().required().min(2).max(30),

  }),
}), createBus);

routesBus.get('/', allBus);

routesBus.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24),
  }),
}), deleteBus);

module.exports = routesBus; // экспортировали роутер
