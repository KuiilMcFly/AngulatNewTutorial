import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-pages', component: LoginPagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
