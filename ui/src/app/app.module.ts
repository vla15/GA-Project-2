import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostsComponent } from './posts/posts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PostContainerComponent } from './post-container/post-container.component';

import { PostService } from './services/post.service';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostsComponent,
    PortfolioComponent,
    LoginPageComponent,
    CreateUserComponent,
    PostContainerComponent,
    PostDetailComponent,
    AddNewPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
