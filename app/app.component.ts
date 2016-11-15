import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component'
import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { CursosComponent } from './cursos/cursos.component';
import { LifeCycleComponent } from './ciclo/life-cycle.component';

@Component({
    moduleId: module.id
    , selector: 'my-app'
    , templateUrl: 'app.component.html'
    , directives: [
      MeuPrimeiroComponent, CursosComponent
      , DataBindingComponent, LifeCycleComponent
    ]
})
export class AppComponent {

  valorInicial = 15;

}
