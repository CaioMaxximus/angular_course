import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component'
import { LoginComponent } from './components/views/login/login.component'
import { ChatComponent } from './components/views/chat/chat.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "chat",
  component: ChatComponent
}, {
  path: "login",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
