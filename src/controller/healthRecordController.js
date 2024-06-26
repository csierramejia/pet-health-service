import { response, request } from "express";
import {
    getHealthRecordByName,
    saveHealthRecord,
    getHealthRecords
} from "../services/healthRecordService.js"

export const getRecords = async (req = request, res = response) => {

    const { name } = req.params;

    const healthRecord = await getHealthRecords(name);

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