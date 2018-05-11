import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gif} from "./types/gif";

@Injectable()
export class GiphySearchService {

  constructor(private httpClient: HttpClient) {
  }

  searchForGifs(searchTerm: string) {
    return this.httpClient
      .get<Gif[]>(
        `http://api.giphy.com/v1/gifs/search?api_key=rOgR2hv14OvffKYnDfKmeBNiaF2m6TQb&q=${searchTerm}`
      );
  }

}
