import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchPageComponent } from './gif-search-page.component';

describe('GifSearchPageComponent', () => {
  let component: GifSearchPageComponent;
  let fixture: ComponentFixture<GifSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
