import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifCardListComponent } from './gif-card-list.component';

describe('GifCardListComponent', () => {
  let component: GifCardListComponent;
  let fixture: ComponentFixture<GifCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
