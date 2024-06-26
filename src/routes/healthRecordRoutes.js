import { Router } from "express";
import { check } from "express-validator";
import { getRecordByName, 
         saveRecord,
         getRecords
         } from "../controller/healthRecordController.js"


export const router = Router();

router.get('/', getRecords );

router.get('/:name', getRecordByName );

router.post('/', saveRecord );