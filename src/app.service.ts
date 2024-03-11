import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
    testPost(): string {
        return 'Test for CI/CD on cyclic!';
    }
}
