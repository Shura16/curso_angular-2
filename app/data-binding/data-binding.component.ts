import { Component } from '@angular/core';

@Component({
  moduleId: module.id
  , selector: 'data-binding'
  , templateUrl: 'data-binding.component.html'
})
export class DataBindingComponent {
  constructor() {  }

  url = 'www.google.com.br';
  urlImg = 'http://www.lorempixel.com/400/200/nature';
}
