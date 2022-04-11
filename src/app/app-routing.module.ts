import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './pages/client/shopping-cart/shopping-cart.component';
import { DefaultLayoutComponent } from './pages/common/default-layout/default-layout.component';
import { MenuListComponent } from './pages/restaurant/menu-list/menu-list.component';
import { RestaurantListComponent } from './pages/common/restaurant-list/restaurant-list.component';
import { LoginComponent } from './pages/login/login.component';
import { PlatlistComponent } from './pages/client/platlist/platlist.component';
import { OrderListComponent } from './pages/common/order-list/order-list.component';
import { DelevererListComponent } from './pages/ekaly/deleverer-list/deleverer-list.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'app',
    component: DefaultLayoutComponent,
    children:[
      {
        path:'restaurants',
        component: RestaurantListComponent
      },
      {
        path:'restaurants/:id',
        component: MenuListComponent
      },
      {
        path:'plats',
        component: PlatlistComponent
      },
      {
        path:'users/cart',
        component: ShoppingCartComponent
      },
      {
        path:'orders',
        component: OrderListComponent
      },
      {
        path: 'deliverers',
        component: DelevererListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
