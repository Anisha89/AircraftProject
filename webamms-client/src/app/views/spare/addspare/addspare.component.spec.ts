import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspareComponent } from './addspare.component';

describe('AddspareComponent', () => {
  let component: AddspareComponent;
  let fixture: ComponentFixture<AddspareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
