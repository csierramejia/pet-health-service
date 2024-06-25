import { DBConnection } from './config/dbConfig.js'
import { HealthRecord } from './schemas/healthRecordSchema.js';

console.log(' test ');

const test = async () => {
    console.log('test .... ');
    DBConnection();

    const petName = 'Gaia', 
          species = 'CAT', 
          ownerName = 'CASM', 
          ownerContact= 'CASM',
          visitDate = new Date(),
          reasonForVisit = 'Control';
    const health = new HealthRecord({ petName, 
                                      species, 
                                      ownerName, 
                                      ownerContact,
                                      visitDate,
                                      reasonForVisit 
                                    });
    await health.save();
}

test();