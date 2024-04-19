import { Component, EventEmitter, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() featureSelected =new EventEmitter<string>();
  onSelect(feature:string){
    this.featureSelected.emit(feature);

  }
}
