import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'hola mundo';
  contador: number = 0;

  aumentar() {
    this.contador++;
  }
  dismunir() {
    this.contador--;
  }
}
