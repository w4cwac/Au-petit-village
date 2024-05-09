import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="social">
        <p>Rejoignez nous !</p>
        <ul>
          <li><a href="https://www.instagram.com/centre_europeen_de_formation/" target="_blank"><img [src]="insta" alt="logo instagram"></a></li>
          <li><a href="https://twitter.com/CEFormation" target="_blank"><img [src]="twitter" alt="logo X anciennement twitter"></a></li>
        </ul>
      </div>
      <hr />
      <div class="whitespace">
        <div class="mentions">| &copy; Hugo Wacogne <span class="bold">Au Petit Village</span></div>
      </div>

    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  insta:string ="assets/images/instagram.svg"
  twitter:string ="assets/images/x-twitter.svg"


}
