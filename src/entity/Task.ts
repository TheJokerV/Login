import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 45
    })
    title!: string;

    @Column({
        length: 45
    })
    description!: string;

    @Column()
    isCompleted!: boolean;
}