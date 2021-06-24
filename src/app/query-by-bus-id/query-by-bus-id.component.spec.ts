import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryByBusIdComponent } from './query-by-bus-id.component';

describe('QueryByBusIdComponent', () => {
  let component: QueryByBusIdComponent;
  let fixture: ComponentFixture<QueryByBusIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryByBusIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryByBusIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
