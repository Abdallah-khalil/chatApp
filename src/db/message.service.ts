import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Message, AddMessageDTO } from "./message.schema";

@Component()
export class MessageService {
    constructor( @Inject('messageToken') private readonly messageModel: Model<Message>) { }

    async findAll(name?: string): Promise<Message[]> {
        if (name) {
            return await this.messageModel.find({ name: name }).exec();
        } else {
            return await this.messageModel.find().exec();
        }
    }

    async addMessage(newMessage: AddMessageDTO): Promise<Message> {
        const message = new this.messageModel(newMessage);
        return await message.save();
    }
}