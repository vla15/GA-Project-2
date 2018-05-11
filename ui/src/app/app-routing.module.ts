import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUserComponent } from './create-user/create-user.component';



const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'new-user',
    component: CreateUserComponent
  },
  {
    path: '**',
    redirectTo: "posts"
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
