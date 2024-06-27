import { expect } from 'chai';
import { DBConnection } from '../../src/config/dbConfig.js';

describe('DBConnection', () => {
    it('should connect to the database', async () => {
        await DBConnection();
        expect(true).to.be.true;
    });
});
