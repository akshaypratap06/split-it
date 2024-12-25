import { Component } from '@angular/core';
import { ExpenseDetailsComponent } from '../../util/expense-details/expense-details.component';
import { GroupExpenseDialogComponent } from '../group-expense-dialog/group-expense-dialog.component';

@Component({
  selector: 'app-settle-up',
  standalone: true,
  imports: [ExpenseDetailsComponent, GroupExpenseDialogComponent],
  templateUrl: './settle-up.component.html',
  styleUrl: './settle-up.component.css',
})
export class SettleUpComponent {}
