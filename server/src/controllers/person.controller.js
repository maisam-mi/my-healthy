import asyncHandler from 'express-async-handler';
import model from '../model/person.model.js';

const getPersons = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbgetPersons());
});

const getPerson = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbgetPerson(req));
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
