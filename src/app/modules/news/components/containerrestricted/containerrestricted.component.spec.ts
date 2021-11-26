import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerrestrictedComponent } from './containerrestricted.component';

describe('ContainerrestrictedComponent', () => {
  let component: ContainerrestrictedComponent;
  let fixture: ComponentFixture<ContainerrestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerrestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerrestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
