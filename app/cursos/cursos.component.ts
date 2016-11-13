import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

/**
 * Classe de Compomente para Cursos.
 * @selector cursos-lista
 */
@Component({
  moduleId: module.id
  , selector: 'cursos-lista'
  , templateUrl: 'cursos.component.html'
  , providers: [CursosService]
})
export class CursosComponent {

  nome = 'João Antônio';

  cursos;

  /**
   * Inicializa a lista de Cursos.
   */
  constructor(cursosService: CursosService) {
    this.cursos = cursosService.getCursos();
  }

}
