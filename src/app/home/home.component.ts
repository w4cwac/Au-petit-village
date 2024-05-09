import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  template: `
    <p>
      home works!
    </p>
    <app-footer></app-footer>
  `,
  styles: ``
})
export class HomeComponent {

}
