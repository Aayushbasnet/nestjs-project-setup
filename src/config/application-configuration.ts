import { registerAs } from "@nestjs/config";

export default registerAs('application', () => ({ 
    port: parseInt(process.env.APP_PORT) || 3005,
    env: process.env.NODE_ENV || 'development',
    name: process.env.APP_NAME || 'NestJS'
}))