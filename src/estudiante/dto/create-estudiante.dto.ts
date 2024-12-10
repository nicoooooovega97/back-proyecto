import { IsString, IsEmail } from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsString()
  rut: string;

  @IsString()
  tipo: string;
}