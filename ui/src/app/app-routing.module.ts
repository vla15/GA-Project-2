import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



const routes: Routes = [
  {
    path: 'posts',
    component: PostContainerComponent
  },
  {
    path: "posts/:id",
    component: PostDetailComponent
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
    path: 'create-user',
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
