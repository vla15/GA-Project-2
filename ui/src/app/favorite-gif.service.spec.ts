import { TestBed, inject } from '@angular/core/testing';

import { FavoriteGifService } from './favorite-gif.service';

describe('FavoriteGifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteGifService]
    });
  });

  it('should be created', inject([FavoriteGifService], (service: FavoriteGifService) => {
    expect(service).toBeTruthy();
  }));
});
