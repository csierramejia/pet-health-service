import { response, request } from "express";
import { getHealthRecordByName } from "../services/healthRecordService.js"

export const getRecordByName = async ( req = request, res = response ) => {

    const { name } = req.params;

    const healthRecord = await getHealthRecordByName( name );

    res.json({
        healthRecord
    });
}