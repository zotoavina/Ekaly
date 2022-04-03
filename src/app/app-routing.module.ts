import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './pages/common/default-layout/default-layout.component';
import { MenuListComponent } from './pages/common/menu-list/menu-list.component';
import { RestaurantListComponent } from './pages/common/restaurant-list/restaurant-list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'ekaly/login',
    component:LoginComponent
  },
  {
    path:'ekaly/app',
    component: DefaultLayoutComponent,
    children:[
      {
        path:'restaurants',
        component: RestaurantListComponent
      },
      {
        path:'plats',
        component: MenuListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
