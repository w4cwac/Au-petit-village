import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductService } from '../product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    ProductCardComponent, 
    CommonModule, 
    SortByPricePipe, 
    FilterByNamePipe,
    FooterComponent
  ],
  template: `
    <div class="home"><h1>Bienvenue</h1>
      <p>
      Au petit village est une entreprise qui confectionne des figurines issues de la bande dessinée Astérix et Obélix. Elle cible une population jeune entre 30 et 55 ans, nostalgique. 
      </p>
  
      <h1>Voici nos produits</h1>
      <div>
      Chercher : <input type="text" id="search" name="search" (change)="saveSearch($event)" />
      </div>
      <div *ngIf="search != ''">La recherche : {{search}}</div>
      <button *ngIf="!sort" (click)="onClick()">Trier par ordre croissant</button>
      <button *ngIf="sort" (click)="onClick()">Trier par ordre décroissant</button>
      <div class="products">
        <app-product-card *ngFor="let product of (products | sortByPrice:sort | filterByName:search );" [product]="product" >
        </app-product-card>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: `
  .home {
      padding: 20px;
    }
    .products {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 100px;
      justify-content: center;
      
    }
    
  `
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  sort: boolean = true;
  search: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  onClick() {
    this.sort = !this.sort;
  }

  saveSearch(event: any) {
    let newValue = event.target.value;
    this.search = newValue;
  } 

}
