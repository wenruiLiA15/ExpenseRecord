import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRecordComponent } from './expense-record.component';

describe('ExpenseRecordComponent', () => {
  let component: ExpenseRecordComponent;
  let fixture: ComponentFixture<ExpenseRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
