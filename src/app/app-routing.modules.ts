import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Router } from 'express';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Product/:id', component: ProductComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
