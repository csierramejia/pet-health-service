import { response, request } from "express";
import { logger } from "../config/logger.js";
import {
    getHealthRecordByName,
    saveHealthRecord,
    getHealthRecordsByDate
} from "../services/healthRecordService.js"

/**
 * Gets health records by visit date.
 */
export const getRecordsByDate = async (req = request, res = response) => {
    const { visitDate } = req.params;
    logger.info(`controller getRecordsByDate`);
    try {
        const healthRecords = await getHealthRecordsByDate(visitDate);
        res.json({ healthRecords });
    } catch (error) {
        logger.error(`Error retrieving health records by date: ${error}`);
        res.status(500).json({ message: 'Error retrieving health records' });
    }
};


/**
 * Gets a health record by pet name.
 */
export const getRecordByName = async (req = request, res = response) => {
    const { name } = req.params;
    try {
        const healthRecord = await getHealthRecordByName(name);
        res.json({ healthRecord });
    } catch (error) {
        logger.error(`Error retrieving health record by name: ${error}`); 
        res.status(500).json({ message: 'Error retrieving health record' });
    }
};


/**
 * Saves a new health record.
 */
export const saveRecord = async (req = request, res = response) => {
    try {
        const healthRecord = await saveHealthRecord(req.body);
        res.status(201).json({ healthRecord });
    } catch (error) {
        logger.error(`Error saving health record: ${error}`);
        res.status(500).json({ message: 'Error saving health record' });
    }
};