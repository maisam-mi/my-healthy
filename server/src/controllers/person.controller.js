import asyncHandler from 'express-async-handler';
import model from '../model/person.model.js';

const getPersons = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbgetPersons());
});

const getPerson = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbgetPerson(req));
});

export default {
  getPersons,
  getPerson,
};
