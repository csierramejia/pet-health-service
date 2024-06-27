/*
import chai from 'chai';
import chaiHttp from 'chai-http';
import { Server } from '../../src/models/Server.js';
import { DBConnection } from '../../src/config/dbConfig.js';
import mongoose from 'mongoose';

chai.use(chaiHttp);

const { expect } = chai;
const server = new Server();

before(async () => {
    await DBConnection();
});

after(async () => {
    await mongoose.connection.close();
});

describe('HealthRecord Controller', () => {
    it('should get health records by date', async () => {
        const visitDate = '2024-06-26';
        const res = await chai.request(server.app).get(`/api/pets/${visitDate}`);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('healthRecords');
    });

    it('should get a health record by name', async () => {
        const name = 'Max';
        const res = await chai.request(server.app).get(`/api/pets/${name}`);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('healthRecord');
    });

    it('should save a health record', async () => {
        const record = {
            petName: 'Max',
            species: 'Dog',
            breed: 'Labrador',
            age: 3,
            gender: 'Male',
            ownerName: 'John Doe',
            ownerContact: '123456789',
            visitDate: '2024-06-26',
            reasonForVisit: 'Checkup'
        };

        const res = await chai.request(server.app).post('/api/pets').send(record);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('healthRecord');
        expect(res.body.healthRecord).to.have.property('_id');
    });
});
*/