import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  moduleId: module.id,
  selector: 'cursos-lista'
  , templateUrl: 'cursos.component.html'
  , providers: [CursosService]
})
export class CursosComponent {

  header = 'Lista de Cursos';

  cursos: string[];

  constructor(service: CursosService) {
    this.cursos = service.getAll();
  }

}
