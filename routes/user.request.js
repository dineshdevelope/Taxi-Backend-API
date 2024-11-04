import express from "express";
import { GetRequest,CreateRequest,UpdateRequest ,DeleteRequest,SingleRequest} from "../controllers/user.request.controller.js";

const router=express.Router()

router.get("/",GetRequest)
router.get("/:id",SingleRequest)
router.post("/",CreateRequest)
router.put("/:id",UpdateRequest)
router.delete("/:id",DeleteRequest)

export default router