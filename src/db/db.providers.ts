import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { MessageSchema } from './message.schema';

export const DBProvider = [
    {
        provide: 'dbToken',
        useFactory: async (): Promise<mongoose.Connection> => {
            return await mongoose.connect(process.env.DB_CONN, {}, (error) => {
                if (error) {
                    console.log(error);
                }
            });
        }
    }
];
