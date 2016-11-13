import { Injectable } from '@angular/core';

/**
 * Classe de Serviços para Cursos.
 */
@Injectable()
export class CursosService {

  /**
   * Obtém uma lista de Cursos.
   * @return string[] Lista de Cursos.
   */
  getCursos() : string[] {
    return ['Angular 2', 'Java', 'Spring Boot'];
  }

}
