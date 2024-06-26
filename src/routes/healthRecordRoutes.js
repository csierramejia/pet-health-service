import { Router } from "express";
import { check } from "express-validator";
import { getRecordByName } from "../controller/healthRecordController.js"


export const router = Router();

router.get('/:name', getRecordByName );