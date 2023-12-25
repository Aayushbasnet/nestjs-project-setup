import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("Path for env", `${ process.cwd() } / config /.${ process.env.NODE_ENV }.env}`);
  console.log("Port", process.env.APP_PORT);
  const configService = app.get(ConfigService);
  const port = configService.get("db.host")|| 3005;
  console.log("object,");
  await app.listen(port, ()=> {
    Logger.log(`Server running on: `, port);
  });
}
bootstrap();
