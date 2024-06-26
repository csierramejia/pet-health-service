import { HealthRecord } from '../schemas/healthRecordSchema.js';

export const getHealthRecordsByDate = async (visitDate) => {

    try {
        const startDate = new Date(visitDate);
        const endDate = new Date(visitDate);
        endDate.setDate(endDate.getDate() + 1); // Includes the end of the day

        const health = await HealthRecord.find({
            visitDate: {
                $gte: startDate,
                $lt: endDate
            }
        });

        return health;
    } catch (error) {
        console.error('Error fetching health records:', error);
        throw error;
    }

}

export const getHealthRecordByName = async (petName) => {

    try {
        const health = await HealthRecord.findOne({ petName });
        console.log(health);
        return health;
    } catch (error) {
        console.error('Error fetching health record by petName:', error);
        throw error;
    }

}

export const saveHealthRecord = async (body) => {

    try {
        const record = new HealthRecord(body);
        record.visitDate = new Date();
        return await record.save();
    } catch (error) {
        console.error('Error save record:', error);
        throw error;
    }

}