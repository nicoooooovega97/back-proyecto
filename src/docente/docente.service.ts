import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { Docente } from './entities/docente.entity';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}

  create(createDocenteDto: CreateDocenteDto) {
    const docente = this.docenteRepository.create(createDocenteDto);
    return this.docenteRepository.save(docente);
  }

  findAll() {
    return this.docenteRepository.find();
  }

  findOne(id: number) {
    return this.docenteRepository.findOne({ where: { id } });
  }

  update(id: number, updateDocenteDto: CreateDocenteDto) {
    return this.docenteRepository.update(id, updateDocenteDto);
  }

  remove(id: number) {
    return this.docenteRepository.delete(id);
  }
}