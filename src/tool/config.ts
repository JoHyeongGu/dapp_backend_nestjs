import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { loggingMiddleware } from './database/mysql/logging-middleware';

export const config_root = [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env',
    }),
    PrismaModule.forRoot({
        isGlobal: true,
        prismaServiceOptions: {
            explicitConnect: true,
            middlewares: [loggingMiddleware()],
        },
    }),
];
