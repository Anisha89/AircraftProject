import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionformComponent } from './concessionform.component';

describe('ConcessionformComponent', () => {
  let component: ConcessionformComponent;
  let fixture: ComponentFixture<ConcessionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcessionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
