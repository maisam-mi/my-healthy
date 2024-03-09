import asyncHandler from 'express-async-handler';
import model from '../model/person.model.js';
import recModel from '../model/record.model.js';

const getPersons = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbgetPersons());
});

const getPerson = asyncHandler(async (req, res) => {
  const personsRecordsCount = (await recModel.dbgetPersonRecordsWithEmail(req.params.email)).length;
  if (personsRecordsCount > 0) res.status(200).json(await model.dbgetPersonWithRecords(req.params.email));
  else {
    const person = await model.dbgetPerson(req.params.email);
    person.traveleddistance = 0;
    person.calories = 0;
    person.time = { hours: 0, minutes: 0, seconds: 0 };
    res.status(200).json(person);
  }
});

const addPerson = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbaddPerson(req));
});

const updatePerson = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbupdatePerson(req));
});

const deletePerson = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbdeletePerson(req));
});

const authenticatePerson = asyncHandler(async (req, res) => {
  const person = await model.dbgetPerson(req.body.email);
  if (!person || person == '') res.status(401).end();
  else if (req.body.password !== person.password) res.status(401).end();
  else res.status(200).json(person);
});

export default {
  getPersons,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
  authenticatePerson,
};
