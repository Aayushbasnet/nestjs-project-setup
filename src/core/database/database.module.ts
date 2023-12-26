import { Module } from "@nestjs/common";
import { ConfigModule} from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseFactory } from "./database.factory";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: databaseFactory
        })
    ],
    providers: [],
    exports: []
})

export class DatabaseModule {}