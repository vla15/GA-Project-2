import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFontAwesomeModule } from 'angular-font-awesome'

import {AppComponent} from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostsComponent } from './posts/posts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';

import { PostService } from './services/post.service';
import { VoteService } from './services/vote.service';

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
    PostService,
    VoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
