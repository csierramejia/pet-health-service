import { Router } from "express";
import { check } from "express-validator";
import { getRecordByName, 
         saveRecord,
         getRecordsByDate
         } from "../controller/healthRecordController.js"


export const router = Router();

router.get('/:visitDate', getRecordsByDate );

router.get('/:name', getRecordByName );

router.post('/', saveRecord );