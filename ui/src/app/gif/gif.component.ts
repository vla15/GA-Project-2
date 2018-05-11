import {Component, Input, OnInit} from '@angular/core';
import {FavoriteGifService} from '../favorite-gif.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  @Input() gif;

  constructor(private favoriteGifService: FavoriteGifService) {
  }

  addToFavorites() {
    this.favoriteGifService.addNewFavorite(this.gif)
      .subscribe((response) => {
          console.log(response['data']);
        }
      );
  }

  ngOnInit() {

  }

}
