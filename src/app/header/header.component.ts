import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'

})

export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();
    // @Output() showRecipes: boolean = true;


    onSelect(feature: string){
        this.featureSelected.emit(feature)
    }
}