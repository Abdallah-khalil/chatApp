import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { MessageGateway } from './socketIO.component';
import { DBModule } from './db/db.module';


@Module({
  modules: [DBModule],
  controllers: [HomeController],
  components: [MessageGateway],
})
export class ApplicationModule {}
