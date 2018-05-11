import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteGifComponent } from './favorite-gif.component';

describe('FavoriteGifComponent', () => {
  let component: FavoriteGifComponent;
  let fixture: ComponentFixture<FavoriteGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
