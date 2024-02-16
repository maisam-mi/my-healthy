import express from 'express';
import controller from '../../controllers/person.controller.js';

const router = express.Router();

router.get('/', controller.getPersons);
router.get('/:pid', controller.getPerson);

export default router;
