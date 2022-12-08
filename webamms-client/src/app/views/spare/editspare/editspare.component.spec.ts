import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspareComponent } from './editspare.component';

describe('EditspareComponent', () => {
  let component: EditspareComponent;
  let fixture: ComponentFixture<EditspareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditspareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditspareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
