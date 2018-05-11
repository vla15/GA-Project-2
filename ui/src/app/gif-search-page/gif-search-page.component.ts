import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gif-search-page',
  templateUrl: './gif-search-page.component.html',
  styleUrls: ['./gif-search-page.component.css']
})
export class GifSearchPageComponent implements OnInit {

  gifs = [];

  constructor() {
  }

  onSearch(newGifs) {
    this.gifs = newGifs;
  }

  ngOnInit() {
  }

}
