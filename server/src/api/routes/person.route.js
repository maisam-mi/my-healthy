import express from "express";
import controller from "../../controllers/person.controller.js";

const router = express.Router();

router.get("/", controller.getPersons);
router.get("/:pid", controller.getPerson);
router.post("/", controller.addPerson);
router.patch("/:email", controller.updatePerson);
router.delete("/:email", controller.deletePerson);

export default router;