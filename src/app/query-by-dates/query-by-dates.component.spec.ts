import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryByDatesComponent } from './query-by-dates.component';

describe('QueryByDatesComponent', () => {
  let component: QueryByDatesComponent;
  let fixture: ComponentFixture<QueryByDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryByDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryByDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
