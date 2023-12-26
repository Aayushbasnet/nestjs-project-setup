import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config from "src/config";

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [`${ process.cwd() }/config/env/.env`, `${ process.cwd()}/config/env/.${process.env.NODE_ENV}.env}`],
            isGlobal: true,
            expandVariables: true,
            load: config,
            cache: true
        })
    ],
    providers: [],
    exports: []
})

    
export class CoreModule {}