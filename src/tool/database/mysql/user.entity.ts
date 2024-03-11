import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', nullable: false, unique: true })
    userId: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;

    @Column({ type: 'char', nullable: false })
    state: string;

    @Column({ type: 'char', nullable: true })
    snsToken: string;

    @Column({ type: 'char', nullable: true })
    email: string;

    @Column({ type: 'char', nullable: true })
    phoneNum: string;

    @Column({ type: 'date', nullable: true })
    updatedAt: Date;

    @Column({ type: 'timestamp', nullable: false })
    createdAt: Date;
}
