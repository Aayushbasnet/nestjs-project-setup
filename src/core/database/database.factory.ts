import { ConfigServiceTemplate, IEnvironmentVariable } from "src/config/config-service-template";

class DatabaseFactory extends ConfigServiceTemplate { 
    constructor(env: IEnvironmentVariable) {
        super(env);
    }
    
    createConfigOptions() {
        return {
            type: "postgres",
            host: this.getValue("DB_HOST"),
            port: this.getValue("DB_PORT"),
            username: this.getValue("DB_USERNAME"),
            password: this.getValue("DB_PASSWORD"),
            database: this.getValue("DB_DATABASE"),
            entities: [__dirname + "/../../**/*.entity{.ts,.js}"],
            synchronize: false
        }    
    }
}

const databaseFactory = new DatabaseFactory(process.env).getConfigOptions();

export {databaseFactory}