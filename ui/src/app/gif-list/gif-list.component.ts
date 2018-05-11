import {Component, Input, OnInit} from '@angular/core';
import {GiphySearchService} from '../giphy-search.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {

  @Input() gifs;

  constructor(private giphySearchService: GiphySearchService) {
  }

  ngOnInit() {
    this.giphySearchService.searchForGifs('dog')
      .subscribe((response) => {
          this.gifs = response['data'];
        }
      );
  }

}
