import { registerAs } from "@nestjs/config";

export default registerAs('db', () => {
    return {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_DATABASE || 'rest_api',
        synchronize: process.env.DATABASE_SYNC === "true"
    }
})