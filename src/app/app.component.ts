import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  name = 'shrey';
  loadedFeature = 'recipe';

  onNaviagate(feature: string) {
    this.loadedFeature = feature;
  }
}
