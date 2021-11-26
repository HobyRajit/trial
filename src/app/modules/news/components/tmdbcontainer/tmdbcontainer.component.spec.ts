import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbcontainerComponent } from './tmdbcontainer.component';

describe('TmdbcontainerComponent', () => {
  let component: TmdbcontainerComponent;
  let fixture: ComponentFixture<TmdbcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdbcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
