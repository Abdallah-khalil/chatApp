import { Connection } from "mongoose";
import { MessageSchema } from "./message.schema";

export const MessageProvider = [
    {
        provide: 'messageToken',
        useFactory: async (conn: Connection) => conn.model('message', MessageSchema),
        inject: ['dbToken']
    }
]