import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <nav>
        <div class="logo"><a [routerLink]="['']"><img [src]="logo" width="60px" alt="casque de gaulois avec le nom au-petit-village ecrit en rouge"></a></div>
        <div class="links">
          <ul>
            <li><a [routerLink]="['About']">A-Propos</a></li>
            <li><a [routerLink]="['Product']">Nos Produits</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logo:string = "assets/images/logo.jpg"

}
