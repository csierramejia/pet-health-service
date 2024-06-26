import express from 'express';
import cors from 'cors';
import { router } from '../routes/healthRecordRoutes.js';
import { DBConnection } from '../config/dbConfig.js';

export class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.apiPaths = {
            healthRecords: '/api/pets',
        };

        // Connect to database
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    async connectDB() {
        await DBConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Body parsing
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.apiPaths.healthRecords, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}