import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DelevererListComponent } from './pages/ekaly/deleverer-list/deleverer-list.component';
import { OrderListComponent } from './pages/common/order-list/order-list.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultLayoutComponent } from './pages/common/default-layout/default-layout.component';
import { RestaurantListComponent } from './pages/common/restaurant-list/restaurant-list.component';
import { MenuListComponent } from './pages/restaurant/menu-list/menu-list.component';
import { PlatlistComponent } from './pages/client/platlist/platlist.component';
import { ShoppingCartComponent } from './pages/client/shopping-cart/shopping-cart.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultLayoutComponent,
    RestaurantListComponent,
    MenuListComponent,
    ShoppingCartComponent,
    PlatlistComponent,
    DelevererListComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
