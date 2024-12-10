import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from 'src/common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { DocenteModule } from './docente/docente.module';
import { NodocenteModule } from './nodocente/nodocente.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { NotaModule } from './nota/nota.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { AnotacionModule } from './anotacion/anotacion.module';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT || 5432,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ProductsModule,
    CommonModule,
    SeedModule,
    FilesModule,
    AuthModule,
    EstudianteModule,
    DocenteModule,
    NodocenteModule,
    AsignaturaModule,
    NotaModule,
    AsistenciaModule,
    AnotacionModule,
    EventoModule,
  ],
})
export class AppModule {}