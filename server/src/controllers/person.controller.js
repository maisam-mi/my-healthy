import asyncHandler from 'express-async-handler';
import model from '../model/person.model.js';
import recModel from '../model/record.model.js';

const getPersons = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbgetPersons());
});

const getPerson = asyncHandler(async (req, res) => {
  const personsRecordsCount = (await recModel.dbgetPersonRecordsWithEmail(req)).length;
  if (personsRecordsCount > 0) res.status(200).json(await model.dbgetPersonWithRecords(req));
  else {
    const person = await model.dbgetPerson(req);
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

export default {
  getPersons,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
};
