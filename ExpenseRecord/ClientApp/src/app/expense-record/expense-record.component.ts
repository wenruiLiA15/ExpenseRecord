import { Component, OnInit } from '@angular/core';
import { ExpenseRecord } from '../models/ExpenseRecord';
import { ExpenseService } from '../services';
@Component({
  selector: 'app-expense-record',
  templateUrl: './expense-record.component.html',
  styleUrls: ['./expense-record.component.css']
})
export class ExpenseRecordComponent implements OnInit {
  private fullList: ExpenseRecord[] = [];
  public displayList: Array<ExpenseRecord> = new Array<ExpenseRecord>;
  constructor(private ExpenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadData();
  }
  private loadData(): void {
    this.ExpenseService.getAll().subscribe(res => {
      this.ExpenseService.displayList = res;
      this.fullList = [...this.ExpenseService.displayList];
    this.displayList = this.ExpenseService.displayList;
      console.log(res);
    });
    this.fullList = [...this.displayList];
  }
}
