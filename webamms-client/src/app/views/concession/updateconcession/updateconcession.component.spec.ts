import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconcessionComponent } from './updateconcession.component';

describe('UpdateconcessionComponent', () => {
  let component: UpdateconcessionComponent;
  let fixture: ComponentFixture<UpdateconcessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateconcessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateconcessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
