import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



const routes: Routes = [
  {
    path: '*',
    component: PostsComponent
  },
  {
    path: '/portfolio',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
