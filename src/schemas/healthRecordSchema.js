import { Schema, model } from 'mongoose';

const healthRecordSchema = new Schema({
    petName: {
        type: String,
        required: [true, 'Pet name is required']
    },
    species: {
        type: String,
        required: [true, 'Species is required']
    },
    breed: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    ownerName: {
        type: String,
        required: [true, 'Owner name is required']
    },
    ownerContact: {
        type: String,
        required: [true, 'Owner contact is required']
    },
    ownerAddress: {
        type: String,
    },
    vaccinations: {
        type: [String],
    },
    allergies: {
        type: [String],
    },
    medications: {
        type: [String],
    },
    previousIllnesses: {
        type: [String],
    },
    surgeries: {
        type: [String],
    },
    visitDate: {
        type: Date,
        required: [true, 'Visit date is required']
    },
    reasonForVisit: {
        type: String,
        required: [true, 'Reason for visit is required']
    },
    diagnosis: {
        type: String,
    },
    treatment: {
        type: String,
    },
    notes: {
        type: String,
    },
    weight: {
        type: Number,
    },
    temperament: {
        type: String,
    }
});

export const HealthRecord = model('HealthRecord', healthRecordSchema);
