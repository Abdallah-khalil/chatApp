import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Message, AddMessageDTO } from "./message.schema";

@Component()
export class MessageService {
    constructor( @Inject('messageToken') private readonly messageModel: Model<Message>) { }

    async findAll(): Promise<Message[]> {
        return await this.messageModel.find().exec();
    }

    async addMessage(newMessage: AddMessageDTO): Promise<Message> {
        const message = new this.messageModel(newMessage);
        return await message.save();
    }
}