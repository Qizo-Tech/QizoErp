import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricinglevelComponent } from './pricinglevel.component';

describe('PricinglevelComponent', () => {
  let component: PricinglevelComponent;
  let fixture: ComponentFixture<PricinglevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricinglevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricinglevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
