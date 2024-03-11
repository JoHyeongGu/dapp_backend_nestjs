import { ConfigModule } from '@nestjs/config';

export const config_root = ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
});
