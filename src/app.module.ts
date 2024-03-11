import { mysqlConnect } from './tool/database/mysql/typeorm.config';
import { UserModule } from './user/user.module';
import { config_root } from './tool/config';
import { Module } from '@nestjs/common';

@Module({
    imports: [config_root, mysqlConnect(process.env), UserModule],
})
export class AppModule {}
