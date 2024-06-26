import { response, request } from "express";
import {
    getHealthRecordByName,
    saveHealthRecord,
    getHealthRecordsByDate
} from "../services/healthRecordService.js"

export const getRecordsByDate = async (req = request, res = response) => {

    const { visitDate } = req.params;

    const healthRecord = await getHealthRecordsByDate( visitDate );

    res.json({
        healthRecord
    });
}

export const getRecordByName = async (req = request, res = response) => {

    const { name } = req.params;

    const healthRecord = await getHealthRecordByName(name);

    res.json({
        healthRecord
    });
}

export const saveRecord = async (req = request, res = response) => {

    const healthRecord = await saveHealthRecord(req.body);

    res.json({
        healthRecord
    });
}