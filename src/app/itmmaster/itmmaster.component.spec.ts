import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmmasterComponent } from './itmmaster.component';

describe('ItmmasterComponent', () => {
  let component: ItmmasterComponent;
  let fixture: ComponentFixture<ItmmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItmmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItmmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
