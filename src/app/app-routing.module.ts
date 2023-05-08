import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';

const routes: Routes = [
{path:'', component: HomeComponentComponent},

{path: 'products', children:[
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent }
]},

{ 
  path: 'products',
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
