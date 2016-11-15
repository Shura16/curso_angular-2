import { Component } from '@angular/core';

import { InputPropertyComponent } from './input-property.component';
import { OutputPropertyComponent } from './output-property.component';

@Component({
  moduleId: module.id
  , selector: 'data-binding'
  , templateUrl: 'data-binding.component.html'
  , styleUrls: ['data-binding.component.css']
  , directives: [InputPropertyComponent, OutputPropertyComponent]
})
export class DataBindingComponent {
  constructor() {  }

  url = 'www.google.com.br';
  urlImg = 'http://www.lorempixel.com/400/200/nature';

  conteudoAtual : string = '';
  conteudoSalvo : string = '';

  nome : string = '';

  isMouseOver : boolean = false;

  pessoa = { nome: '', idade: 18 };

  nomeCurso : string = 'Curso de Angular 2';

  valorInicial : number = 10;

  onClick() {
    console.info('O botão foi clicado!');
  }

  onKeyup(valor:string) {
    this.conteudoAtual = valor;
  }

  onSave(valor:string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event) {
    console.log(event);
  }
}
