import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostsComponent } from './posts/posts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostsComponent,
    PortfolioComponent,
    LoginPageComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
