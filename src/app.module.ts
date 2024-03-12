import { UserModule } from './user/user.module';
import { config_root } from './tool/config';
import { Module } from '@nestjs/common';

@Module({
    imports: [...config_root, UserModule],
})
export class AppModule {}
