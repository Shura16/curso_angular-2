import { Component } from '@angular/core';

import { InputPropertyComponent } from "./input-property.component";
import { OutputPropertyComponent } from "./output-property.component";

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-binding',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.css'],
  directives: [InputPropertyComponent, OutputPropertyComponent]
})
export class DataBindingComponent {
  constructor() {  }

  /**

  url = 'http://www.google.com.br';
  urlImg = 'http://lorempixel.com/400/200/nature/';

  conteudoAtual:  string = '';
  conteudoSalvo:  string = '';

  isOnSpan = false;

  onClick() {
    alert('Botão clicado!');
  }

  onKeyup(event:KeyboardEvent) {
    console.log(event);
    this.conteudoAtual = event.target.value;
  }

  onSave(valor: string) {
    this.conteudoSalvo = valor;
  }

  onSpan() {
    this.isOnSpan = !this.isOnSpan;
  }

  */

  nome: string = 'nome';

  nomeCurso: string = 'Curso Angular 2';
}
