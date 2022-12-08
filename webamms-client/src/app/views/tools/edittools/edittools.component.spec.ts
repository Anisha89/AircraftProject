import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittoolsComponent } from './edittools.component';

describe('EdittoolsComponent', () => {
  let component: EdittoolsComponent;
  let fixture: ComponentFixture<EdittoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
