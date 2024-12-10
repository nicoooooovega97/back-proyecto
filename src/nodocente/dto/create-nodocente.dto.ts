import { IsString, IsEmail } from 'class-validator';

export class CreateNodocenteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  correo: string;

  @IsString()
  contrasena: string;

  @IsString()
  rut: string;

  @IsString()
  tipo: string;

  @IsString()
  descripcion: string;
}