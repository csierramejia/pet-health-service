import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middleware/validateFields.js";
import {
    getRecordByName,
    saveRecord,
    getRecordsByDate
} from "../controller/healthRecordController.js"


export const router = Router();

router.get('/date/:visitDate', getRecordsByDate);

router.get('/name/:name', [
    check('name', 'Name is required').not().isEmpty(),
    validateFields
], getRecordByName);

router.post('/', saveRecord);