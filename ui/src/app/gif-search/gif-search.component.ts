import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GiphySearchService} from '../giphy-search.service';
import {Gif} from '../types/gif';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})
export class GifSearchComponent implements OnInit {

  // This will call the `onSearch` function of the <app> component
  // We are type-checking to make sure the event only passes an array
  @Output() onSearch = new EventEmitter<Gif[]>();
  searchTerm = '';

  // This constructor injects a `this.giphySearchService` instance
  // and binds it to our class. !!! Don't forget `private` !!!
  constructor(private giphySearchService: GiphySearchService) {
  }

  // This function listens for a submit event on the form.
  // When the form is submitted, new gifs will be found and
  // then passed up to the <app> component.
  onSubmit() {
    this.giphySearchService.searchForGifs(this.searchTerm)
      .subscribe((response) => {
        this.onSearch.emit(response['data']);
      });
  }

  ngOnInit() {
  }
}
