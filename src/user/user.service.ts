import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    getUser() {
        return this.prisma.users.findMany();
    }
}
