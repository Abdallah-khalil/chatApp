import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { ApplicationModule } from './app.module';
import * as helmet from 'helmet';
import * as dotEnv from 'dotenv';

dotEnv.config({
  // path: path.join(__dirname, "../.env")
})
const expressApp: express.Application = express();
expressApp.set("views", path.join(__dirname, "../views"));
expressApp.set("view engine", "ejs");
expressApp.get("/", (req: Request, res: Response) => {
  res.render('index', {
    title: "Chat App",
    active: '/home'
  });
});



async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, expressApp);
  
  app.use(helmet());
  //   app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  await app.listen(<number><any>process.env.PORT , () => {
    console.log("app is listening on port " + process.env.PORT);
  });

}
bootstrap();
