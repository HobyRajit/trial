import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistrestrictedComponent } from './watchlistrestricted.component';

describe('WatchlistrestrictedComponent', () => {
  let component: WatchlistrestrictedComponent;
  let fixture: ComponentFixture<WatchlistrestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistrestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistrestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
