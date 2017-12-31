import { Document, Schema } from "mongoose";

export class AddMessageDTO {
    readonly name: string;
    readonly message: string;
}

export interface Message extends Document {
    name: string;
    message: string;
}

export const MessageSchema = new Schema({
    name: {
        type: String
    },
    message: {
        type: String
    }
});
