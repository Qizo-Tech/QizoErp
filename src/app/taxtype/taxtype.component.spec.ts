import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxtypeComponent } from './taxtype.component';

describe('TaxtypeComponent', () => {
  let component: TaxtypeComponent;
  let fixture: ComponentFixture<TaxtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
