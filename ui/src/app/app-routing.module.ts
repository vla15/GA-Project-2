import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavoritesListComponent} from "./favorites-list/favorites-list.component";
import {GifSearchPageComponent} from "./gif-search-page/gif-search-page.component";



const routes: Routes = [
  {
    path: 'favorites',
    component: FavoritesListComponent
  },
  {
    path: '',
    component: GifSearchPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
