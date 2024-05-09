import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Product', component: ProductComponent},

];
