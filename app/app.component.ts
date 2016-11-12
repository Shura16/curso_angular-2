import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
    moduleId: module.id
    , selector: 'my-app'
    , templateUrl: 'app.component.html'
    , directives: [DataBindingComponent]
})
export class AppComponent { }
