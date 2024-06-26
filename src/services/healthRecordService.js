import { HealthRecord } from '../schemas/healthRecordSchema.js';

export const getHealthRecords = async ( visitDate ) => {
    
    try {
        const health = await HealthRecord.find( {  } );
        console.log(health);
        return health;
    } catch (error) {
        console.error('Error fetching health records:', error);
        throw error;
    }
    
}

export const getHealthRecordByName = async ( petName ) => {
    
    try {
        const health = await HealthRecord.findOne( { petName } );
        console.log(health);
        return health;
    } catch (error) {
        console.error('Error fetching health record by petName:', error);
        throw error;
    }
    
}

export const saveHealthRecord = async ( body ) => {
    
    try {
        const record = new HealthRecord( body );
        console.log("record1:", record);
        record.visitDate = new Date();
        console.log("record2:", record);
        await record.save();
        return record;
    } catch (error) {
        console.error('Error save record:', error);
        throw error;
    }
    
}