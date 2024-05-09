import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <p>
      home works!
    </p>
  `,
  styles: ``
})
export class HomeComponent {

}
