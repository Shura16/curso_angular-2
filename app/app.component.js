"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_binding_component_1 = require('./data-binding/data-binding.component');
var meu_primeiro_component_1 = require('./primeiro/meu-primeiro.component');
var cursos_component_1 = require('./cursos/cursos.component');
var life_cycle_component_1 = require('./ciclo/life-cycle.component');
var AppComponent = (function () {
    function AppComponent() {
        this.valorInicial = 15;
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [
                meu_primeiro_component_1.MeuPrimeiroComponent, cursos_component_1.CursosComponent,
                data_binding_component_1.DataBindingComponent, life_cycle_component_1.LifeCycleComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map