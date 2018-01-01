import { Controller, Get, Res, Req, Post, Body, HttpStatus, Param } from "@nestjs/common";
import { Response } from "express";
import { Request } from "express-serve-static-core";
import { MessageGateway } from "./socketIO.component";
import { MessageService } from "./db/message.service";
import { Message, AddMessageDTO } from "./db/message.schema";

@Controller("")
export class HomeController {

    constructor(private readonly chatIO: MessageGateway, private readonly messageSvc: MessageService) { }

    @Get("/home")
    public getHomePage( @Res() res, @Req() req) {
        res.render('index', {
            title: "Chat App",
            active: '/home'
        });
    }

    @Get("/messages")
    public async getMessages( @Res() res: Response) {
        try {
            this.messageSvc.findAll().then((messages) => {
                res.send(messages);
            });
        } catch (error) {
            res.status(HttpStatus.NOT_FOUND).send(error);
        }
    }

    @Get("/messages/:name")
    public async getMessagesByName( @Res() res: Response, @Param("name") name: string) {
        try {
            this.messageSvc.findAll(name).then((messages) => {
                res.send(messages);
            });
        } catch (error) {
            res.status(HttpStatus.NOT_FOUND).send(error);
        }
    }


    @Post("/messages")
    public sendMessage( @Body() newMessage: AddMessageDTO, @Res() res: Response) {
        try {
            this.messageSvc.addMessage(newMessage).then(response => {
                this.chatIO.server.emit('message', newMessage);
                res.status(HttpStatus.OK).send(response);
            });
        } catch (error) {
            res.status(HttpStatus.METHOD_NOT_ALLOWED).send(error);
        }
    }
}