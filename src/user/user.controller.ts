import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
@ApiTags('유저 인증 API')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get()
    @ApiOperation({
        summary: '유저 GET API',
        description: '유저 정보를 불러온다.',
    })
    @ApiResponse({
        status: 200,
        type: User,
        isArray: true,
        description: 'MySQL users 테이블에 있는 모든 데이터 조회',
    })
    getUser() {
        return this.service.getUser();
    }
}
