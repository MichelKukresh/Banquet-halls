const Bus = require('../models/bus');
const pool = require('../db');

const ErrorNotFound = require('../errors/ErrorNotFound');
const ErrorAuthorizedButForbidden = require('../errors/ErrorAuthorizedButForbidden');

// добавить автобус
module.exports.createBus = async (req, res, next) => {
  // const {
  //   number, park, model, comment1, comment2, comment3, comment4, comment5,
  // } = req.body;
  // const owner = { _id: 'noUser' };
  // Bus.create({
  //   number, park, model, comment1, comment2, comment3, comment4, comment5, owner,
  // })
  //   .then((bus) => res.send({ data: bus }))
  //   .catch((err) => next(err));
  const {
    brand, model, garageNumber, organization, stateNumber,
    parkNumber, parkName, protocol1, protocol2, protocol3,
    numberDoors, client, comment1, comment2, comment3, comment4, comment5,
  } = req.body;

  try {
    const newBus = await pool.query(
      'INSERT INTO bus (brand, model, garageNumber, organization, stateNumber, parkNumber, parkName, protocol1, protocol2, protocol3, numberDoors, client, comment1, comment2, comment3, comment4, comment5) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *',
      [
        brand, model, garageNumber, organization, stateNumber,
        parkNumber, parkName, protocol1, protocol2, protocol3,
        numberDoors, client, comment1, comment2, comment3, comment4, comment5,
      ],
    );
    res.json(newBus.rows[0]);
  } catch (err) {
    next(err);
  }
};

// облегченная модель скорости
module.exports.putSpeedDay = async (time = '1673862599', speed = 'speed', client = '771325059') => {
  try {
    const bus = await pool.query('SELECT id, client, unix_time, iso_time, unix_time + 10800 AS unix_time_msk, point->> $1 AS speed FROM wialon WHERE client = $2 AND unix_time > $3 ORDER BY id DESC', [speed, client, time]);
    const evenOnly = await bus.rows.filter((n) => {
      const remainder = n.id % 6;
      return remainder === 0;
    });
    // облегченная модель скорости
    console.log(evenOnly);
  } catch (err) {
    console.log(err);
  }
};

// найти все автобусы
module.exports.allBus = (req, res, next) => {
  Bus.find({})
    .then((bus) => res.send({ data: bus }))
    .catch((err) => next(err));
};

// удаление карточки
module.exports.deleteBus = (req, res, next) => {
  // определение создаткля карточки

  Bus.findById(req.params.id)
    .then((bus) => {
      if (!bus) {
        throw new ErrorNotFound('Передан несуществующий _id карточки.');
      }

      if (bus.owner !== 'noUser') {
        throw new ErrorAuthorizedButForbidden('Удаление карточки чужого пользователя запрещено.');
      }
    })
    .then(() => {
      Bus.findByIdAndRemove(req.params.id)
        .orFail(new ErrorNotFound('Передан несуществующий _id карточки.'))
        .then((bus) => res.send({ data: bus }));
    })
    .catch((err) => next(err));
};

// SELECT * FROM wialon ORDER BY id DESC LIMIT 1 //Упоряд резуль выборки по значен в поле id по убыв
// последний id c 1 строчкой

// SELECT DISTINCT client FROM wialon; // сколько уникальных клиентов в виалоне

// SELECT * FROM wialon WHERE client = '771325059' ORDER BY id DESC LIMIT 1; //
// последняя запись по клиенту

// последний запрос по топливу
// SELECT
// id,
// client,
// unix_time,
// iso_time,
// unix_time + 10800 AS unix_time_msk,
// unix_time - 1673890608 AS number_in_arr,
// point->>'speed' AS speed
// FROM wialon WHERE client = '771325059' AND unix_time > '1673890609'  ORDER BY id DESC;
