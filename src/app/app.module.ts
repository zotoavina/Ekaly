import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultLayoutComponent } from './pages/common/default-layout/default-layout.component';
import { RestaurantListComponent } from './pages/common/restaurant-list/restaurant-list.component';
import { MenuListComponent } from './pages/restaurant/menu-list/menu-list.component';
import { ShoppingCartComponent } from './pages/client/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultLayoutComponent,
    RestaurantListComponent,
    MenuListComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
