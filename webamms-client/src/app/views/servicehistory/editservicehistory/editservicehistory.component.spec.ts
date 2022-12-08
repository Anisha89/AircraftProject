import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservicehistoryComponent } from './editservicehistory.component';

describe('EditservicehistoryComponent', () => {
  let component: EditservicehistoryComponent;
  let fixture: ComponentFixture<EditservicehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditservicehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditservicehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
