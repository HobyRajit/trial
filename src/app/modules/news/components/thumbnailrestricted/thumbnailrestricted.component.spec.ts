import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailrestrictedComponent } from './thumbnailrestricted.component';

describe('ThumbnailrestrictedComponent', () => {
  let component: ThumbnailrestrictedComponent;
  let fixture: ComponentFixture<ThumbnailrestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailrestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailrestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
