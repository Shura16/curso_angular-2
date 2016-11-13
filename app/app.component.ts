import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component'
import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { CursosComponent } from './cursos/cursos.component';

@Component({
    moduleId: module.id
    , selector: 'my-app'
    , templateUrl: 'app.component.html'
    , directives: [MeuPrimeiroComponent, CursosComponent, DataBindingComponent]
})
export class AppComponent { }
