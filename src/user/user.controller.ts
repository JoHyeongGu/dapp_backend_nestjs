import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/tool/database/mysql/user.entity';
import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('유저 인증 API')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Post()
    @ApiOperation({ summary: '유저 생성 API', description: '유저를 생성한다.' })
    @ApiCreatedResponse({ description: '유저를 생성한다.', type: User })
    getUser(): string {
        return this.service.getUser();
    }
}
