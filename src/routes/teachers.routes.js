import { Router } from "express";
import teacherscontrollers from "../controllers/teachers.controllers.js";
const router = Router();

router.get("/getAll",teacherscontrollers.getAll);
router.get("/getOne/:teacher_id",teacherscontrollers.getOne);
router.delete("/deleteOne/:teacher_id",teacherscontrollers.deleteOne);
router.post("/insertOne",teacherscontrollers.insertOne);
router.put("/updateOne/:teacher_id",teacherscontrollers.updateOne);






export default router;