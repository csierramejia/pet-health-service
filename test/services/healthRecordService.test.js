import { expect } from 'chai';
import { getHealthRecordByName, saveHealthRecord } from '../../src/services/healthRecordService.js';
import { DBConnection } from '../../src/config/dbConfig.js';
import mongoose from 'mongoose';

before(async () => {
    await DBConnection();
});

after(async () => {
    await mongoose.connection.close();
});

describe('HealthRecord Service', () => {
    it('should save a health record', async () => {
        const record = {
            petName: 'Max',
            species: 'Dog',
            breed: 'Labrador',
            age: 3,
            gender: 'Male',
            ownerName: 'John Doe',
            ownerContact: '123456789',
            visitDate: new Date(),
            reasonForVisit: 'Checkup'
        };

        const savedRecord = await saveHealthRecord(record);
        expect(savedRecord).to.have.property('_id');
    });

    it('should fetch a health record by pet name', async () => {
        const petName = 'Max';
        const record = await getHealthRecordByName(petName);
        expect(record).to.have.property('petName', petName);
    });
});