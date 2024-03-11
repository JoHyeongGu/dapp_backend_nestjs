import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DynamicModule } from '@nestjs/common';

export function mysqlConnect(envInfo: NodeJS.ProcessEnv): DynamicModule {
    const configData: TypeOrmModuleOptions = {
        type: 'mysql',
        host: envInfo.MYSQL_HOST,
        port: Number(envInfo.MYSQL_PORT),
        username: envInfo.MYSQL_USER,
        password: envInfo.MYSQL_PASSWORD,
        database: envInfo.MYSQL_DATABASE,
        namingStrategy: new SnakeNamingStrategy(),
        synchronize: false,
        logging: false,
        autoLoadEntities: true,
        entities: [User],
    };
    return TypeOrmModule.forRoot(configData);
}
