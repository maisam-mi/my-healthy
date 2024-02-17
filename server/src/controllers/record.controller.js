import asyncHandler from 'express-async-handler';
import model from '../model/record.model.js';

const getAllRecords = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbgetAllRecords());
});

const getPersonRecords = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbgetPersonRecords(req));
});

const addRecord = asyncHandler(async (req, res) => {
  res.status(200).json(await model.dbaddRecord(req));
});

export default {
  getAllRecords,
  getPersonRecords,
  addRecord,
};
