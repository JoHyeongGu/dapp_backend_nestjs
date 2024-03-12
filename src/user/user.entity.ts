import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ type: 'varchar', unique: true, nullable: false })
    userId: string;

    @ApiProperty()
    @Column({ type: 'varchar', nullable: false })
    password: string;

    @ApiProperty()
    @Column({ type: 'varchar' })
    state: string;

    @ApiProperty()
    @Column({ type: 'varchar' })
    snsToken: string;

    @ApiProperty()
    @Column({ type: 'varchar' })
    email: string;

    @ApiProperty()
    @Column({ type: 'varchar' })
    phoneNum: string;

    @ApiProperty()
    @Column({ type: 'date', nullable: true })
    updatedAt: Date;

    @ApiProperty()
    @CreateDateColumn()
    createdAt: Date;
}
