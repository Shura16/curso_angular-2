import {
  Component
  , OnInit
  , DoCheck
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , OnDestroy
  , Input
  , ViewChild
} from '@angular/core';

@Component({
  selector: 'life-cycle'
  , template: `
    <p #variavelLocalP>Valor Inicial {{ valorInicial }}</p>
    <p>{{ variavelLocalP.textContent }}</p>
  `
})
export class LifeCycleComponent implements OnInit
  , DoCheck
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , OnDestroy {

    @Input()
    valorInicial : number = 10;

    @ViewChild('variavelLocalP')
    variavelLocalP : HTMLElement;

    constructor() {
      this.log('construtor');
    }

    ngOnChanges() {
      this.log('ngOnChanges');
    }

    ngOnInit() {
      this.log('ngOnInit');
      this.log(this.variavelLocalP);
    }

    ngDoCheck() {
      this.log('ngDoCheck');
    }

    ngAfterContentInit() {
      this.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
      this.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
      this.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
      this.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
      this.log('ngOnDestroy');
    }

    private log(hook: string) {
      console.log(hook);
    }
}
