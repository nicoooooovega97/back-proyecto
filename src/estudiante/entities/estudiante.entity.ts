import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Nota } from '../../nota/entities/nota.entity';
import { Asistencia } from '../../asistencia/entities/asistencia.entity';
import { Anotacion } from '../../anotacion/entities/anotacion.entity';
import { Asignatura } from '../../asignatura/entities/asignatura.entity';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  rut: string;

  @Column({ default: 'Estudiante' })
  tipo: string;

  @OneToMany(() => Nota, nota => nota.estudiante)
  notas: Nota[];

  @OneToMany(() => Asistencia, asistencia => asistencia.estudiante)
  asistencias: Asistencia[];

  @OneToMany(() => Anotacion, anotacion => anotacion.estudiante)
  anotaciones: Anotacion[];

  @ManyToMany(() => Asignatura, asignatura => asignatura.estudiantes)
  asignaturas: Asignatura[];
}