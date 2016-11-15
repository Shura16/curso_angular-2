import {
  Component
  , OnInit
  , DoChanges
  , DoCheck
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , OnDestroy
  , Input
} from '@angular/core';

@Component({
  selector: 'life-cycle'
  , template: `
    <p>Valor Inicial {{ valorInicial }}</p>
  `
})
export class LifeCycleComponent implements OnInit
  , DoChanges
  , DoCheck
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , OnDestroy {

    @Input()
    valorInicial : number = 10;

    constructor() {
      this.log('construtor');
    }

    ngOnChanges() {
      this.log('ngOnChanges');
    }

    ngOnInit() {
      this.log('ngOnInit');
    }

    ngOnDoCheck() {
      this.log('ngOnDoCheck');
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
