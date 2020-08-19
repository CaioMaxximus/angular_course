import { PostCrdComponent } from './components/views/post-crd/post-crd.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component'
import { LoginComponent } from './components/views/login/login.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path :"posts",
  component : PostCrdComponent
},
{
  path: "login",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
