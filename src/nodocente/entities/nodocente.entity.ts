import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NoDocente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @Column()
  rut: string;

  @Column({ default: 'NoDocente' })
  tipo: string;

  @Column()
  descripcion: string;
}