import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './pages/common/default-layout/default-layout.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'ekaly/login',
    component:LoginComponent
  },
  {
    path:'ekaly/app',
    component: DefaultLayoutComponent,
    children:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
