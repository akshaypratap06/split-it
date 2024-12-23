import { Component } from '@angular/core';
import { DialogListComponent } from '../dialog-list/dialog-list.component';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyListComponent } from '../../dialog/currency-list/currency-list.component';
import { UserListComponent } from '../../dialog/user-list/user-list.component';

@Component({
  selector: 'app-expense-details',
  standalone: true,
  imports: [DialogListComponent],
  templateUrl: './expense-details.component.html',
  styleUrl: './expense-details.component.css',
})
export class ExpenseDetailsComponent {
  openGroupNames() {
    this.dialog.open(UserListComponent, { data: [10, 11, 12] });
  }
  paidBy: any = 'You';
  openCurrencyDialog() {
    this.dialog.open(CurrencyListComponent);
  }

  constructor(private dialog: MatDialog) {}
}
