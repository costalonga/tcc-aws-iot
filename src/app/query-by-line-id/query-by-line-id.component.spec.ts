import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryByLineIdComponent } from './query-by-line-id.component';

describe('QueryByLineIdComponent', () => {
  let component: QueryByLineIdComponent;
  let fixture: ComponentFixture<QueryByLineIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryByLineIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryByLineIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
