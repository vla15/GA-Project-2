import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {GifListComponent} from './gif-list/gif-list.component';
import {GifComponent} from './gif/gif.component';
import {HttpClientModule} from '@angular/common/http';

import {GiphySearchService} from './giphy-search.service';
import {GifSearchComponent} from './gif-search/gif-search.component';
import {FormsModule} from '@angular/forms';
import {FavoriteGifService} from './favorite-gif.service';
import {RouterModule} from "@angular/router";
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import {AppRoutingModule} from "./app-routing.module";
import { FavoriteGifComponent } from './favorite-gif/favorite-gif.component';
import { GifSearchPageComponent } from './gif-search-page/gif-search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GifListComponent,
    GifComponent,
    GifSearchComponent,
    FavoritesListComponent,
    FavoriteGifComponent,
    GifSearchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    GiphySearchService,
    FavoriteGifService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
