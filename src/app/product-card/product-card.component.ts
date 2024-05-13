import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="root">
    <h2>{{product.name}}</h2>
    <img [src]="product.picture" />
    <div class="content">
      <div class="price-likes">
        <b>{{product.price}} </b>
      </div>
      <p><a [routerLink]="['Product', product._id]">Voir plus</a></p>
    </div>
  </div>
  `,
  styles: `
  .root {
      display: flex;
      flex-direction: column;
      width: 20vw;
      height: 400px;
      margin: 10px;
      border: 2px solid lightgrey;
      border-radius: 20px;
      align-items: center;
  }

  @media (max-width: 780px) { 
    .root {
      width: 100vw;
    }
  }
  
  .header {
      display: flex;
      flex-direction: column;
      margin: auto;
      text-align: center;

  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 250px;
    margin: auto;
}
  
  .content {
      display: flex;
      flex-direction: column;
      text-align: center;
  }
  
  .price-likes {
      display: flex;
      justify-content: space-around;
  }

  a{
    color: #DA001E;
  }
  `
})
export class ProductCardComponent implements OnInit {
  @Input() product: any = {
    "_id": "630e46c481b5093bca6335dc",
    "price": "$1,025.40",
    "picture": "https://stock.adobe.com/fr/images/fun-gaulois-3d-illustration/427163375",
    "description": "Ad ut consequat sunt aute cillum ut proident laborum aute velit occaecat nulla cupidatat. Eu do consequat pariatur id deserunt excepteur in irure nisi cillum in. Ex officia consequat ut aliqua et ut exercitation deserunt consectetur ad sit tempor incididunt. Sunt occaecat commodo veniam aliqua aute est ipsum ut Lorem anim et anim. Irure cillum consectetur sit proident officia consequat laborum ex duis ullamco mollit exercitation aliqua.\r\n",
    "name": "Gaulois de pâques"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
