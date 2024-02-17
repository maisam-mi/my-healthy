import express from "express";
import controller from "../../controllers/record.controller.js";

const router = express.Router();

router.get("/", controller.getAllRecords);
router.get("/:pid", controller.getPersonRecords);
router.post("/", controller.addRecord);

export default router;
