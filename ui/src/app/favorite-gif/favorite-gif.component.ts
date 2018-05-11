import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavoriteGifService} from '../favorite-gif.service';

@Component({
  selector: 'app-favorite-gif',
  templateUrl: './favorite-gif.component.html',
  styleUrls: ['./favorite-gif.component.css']
})
export class FavoriteGifComponent implements OnInit {

  @Input() gif;
  @Output() removeDeletedGif = new EventEmitter<string>();

  constructor(private favoriteGifService: FavoriteGifService) {
  }

  ngOnInit() {
  }

  deleteGif(gifId) {
    console.log(gifId);
    this.removeDeletedGif.emit(gifId);
    this.favoriteGifService.deleteGif(gifId)
      .subscribe((response) => {
        console.log('deleted gif');
      });
  }

}
