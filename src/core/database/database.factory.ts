import { ConfigServiceTemplate, IEnvironmentVariable } from "src/config/config-service-template";

class DatabaseFactory extends ConfigServiceTemplate { 
    constructor(env: IEnvironmentVariable) {
        super(env);
    }
    
    createConfigOptions() {
        console.log("object", {
            type: "postgres",
            host: this.getValue("DB_HOST"),
            port: this.getValue("DB_PORT"),
            username: this.getValue("DB_USERNAME"),
            password: this.getValue("DB_PASSWORD"),
            database: this.getValue("DB_DATABASE"),
            entities: [__dirname + "/../../**/*.entity{.ts,.js}"],
            synchronize:  "true" === this.getValue("DB_DATABASE")
        });
        return {
            type: "postgres",
            host: this.getValue("DB_HOST"),
            port: this.getValue("DB_PORT"),
            username: this.getValue("DB_USERNAME"),
            password: this.getValue("DB_PASSWORD"),
            database: this.getValue("DB_DATABASE"),
            entities: [__dirname + "/../../**/*.entity{.ts,.js}"],
            synchronize: false,
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration',
            },
            ssl: this.isProduction(),
            schema: this.getValue("DB_SCHEMA")
        }    
    }
}

const databaseFactory = new DatabaseFactory(process.env).ensureValues([
    "DB_HOST",
    "DB_PORT",
    "DB_USERNAME",
    "DB_PASSWORD",
    "DB_DATABASE",
    "DB_SCHEMA"
]);

export {databaseFactory}