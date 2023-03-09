import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { RegisterComponent } from './form/register/register.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  { 
    path: '', 
    component: ProductsComponent,
    canActivate:[AuthguardGuard] 
  },
  { 
    path: 'products', 
    component: ProductsComponent,
    canActivate:[AuthguardGuard] 
  },
  { 
    path: 'products', 
    canActivate:[AuthguardGuard] ,
    children:[
      { 
        path: 'product-edit', 
        component: ProductEditComponent 
      },
      { 
        path: 'product-delete', 
        component: ProductDeleteComponent 
      },
    ]
  },
  { 
    path: 'products/:id', 
    component: ProductDetailComponent 
  },
  { 
    path: 'tdf', 
    component: TemplatedrivenformComponent 
  },
  { 
    path: 'rf', 
    component: ReactiveformComponent 
  },
  { 
    path: 'loginform', 
    component: LoginFormComponent 
  },
  { 
    path: 'registerform', 
    component: RegisterComponent 
  },
  {
    path:'first',
    loadChildren:()=> import ('./first/first.module').then((m)=>m.FirstModule)
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
