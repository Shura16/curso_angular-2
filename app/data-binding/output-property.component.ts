import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id
  , selector: 'contador'
  , template: `
    <div>
      <button (click)="decrementa()" class="btn btn-primary">-</button>
      <input type="text" [value]="valor" readonly="readonly" />
      <button (click)="incrementa()" class="btn btn-primary">+</button>
    </div>
  `
})
export class OutputPropertyComponent {

  @Input()
  valor : number = 0;

  @Output()
  valorMudou = new EventEmitter();

  constructor() {  }

  decrementa() {
    this.valor--;
    this.valorMudou.emit({novoValor: this.valor});
  }

  incrementa() {
    this.valor++;
    this.valorMudou.emit({novoValor: this.valor});
  }

}
