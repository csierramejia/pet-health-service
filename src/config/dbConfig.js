import mongoose from 'mongoose';
import 'dotenv/config'

/**
 * 
 */
export const DBConnection = async () => {

    try {
        await mongoose.connect(process.env.URL_MONGODB);
        console.log('Connected successfully to MongoDB server');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to MongoDB');
    }

}