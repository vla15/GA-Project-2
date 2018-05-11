import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gif} from './types/gif';

@Injectable()
export class FavoriteGifService {

  constructor(private httpClient: HttpClient) {
  }

  addNewFavorite(gif) {
    return this.httpClient.post<Gif>(
      '/api/favorites',
      {
        url: gif.images.fixed_width.url
      }
    );
  }

  getFavorites() {
    return this.httpClient.get<Gif[]>('/api/favorites');
  }

  deleteGif(gifId: string) {
    return this.httpClient.delete(`/api/favorites/${gifId}`);
  }

}
