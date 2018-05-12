import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { ErrorComponent } from './error/error.component'



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
    path: 'create-post',
    component: AddNewPostComponent
  },
  {
    path: "error",
    component: ErrorComponent
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
