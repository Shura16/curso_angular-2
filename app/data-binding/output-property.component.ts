import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contador',
  template: `
    <div>
      <button type="button" class="btn btn-primary"
        (click)="decrementa()">-</button>
      <input type="text" [value]="valor"  readonly="true" />
      <button type="button" class="btn btn-primary"
        (click)="incrementa()">+</button>
    </div>
  `,
})
export class OutputPropertyComponent {
  valor : number = 0;

  constructor() {  }

  decrementa() { this.valor--; }

  incrementa() { this.valor++; }
}
