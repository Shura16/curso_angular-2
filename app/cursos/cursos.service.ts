import { Injectable } from '@angular/core';

/** Serviços com o CRUD com dados hardcoded para Cursos. */
@Injectable()
export class CursosService {

  /** Obtém todos os cursos. */
  getAll() {
    return ['Angular 2', 'Java', 'Spring Boot', 'Node JS'];
  }

}
