import { Module } from "@nestjs/common";
import { DBProvider } from "./db.providers";
import { MessageService } from "./message.service";
import { MessageProvider } from "./message.providers";

@Module({
    modules: [],
    components: [...DBProvider,...MessageProvider, MessageService],
    exports: [...DBProvider,...MessageProvider, MessageService]
})
export class DBModule {

}