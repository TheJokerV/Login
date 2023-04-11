import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Task", { schema: "proyectoGrado" })
export class Task {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "title", nullable: true, length: 45 })
  title!: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 45 })
  description!: string | null;
}