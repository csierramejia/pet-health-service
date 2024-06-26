import { HealthRecord } from '../schemas/healthRecordSchema.js';

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