import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpensedialogComponent } from '../../dialog/expensedialog/expensedialog.component';
import { GroupExpenseDialogComponent } from '../../dialog/group-expense-dialog/group-expense-dialog.component';
import { UserExpenseDialogComponent } from '../../dialog/user-expense-dialog/user-expense-dialog.component';
import { SettleUpComponent } from '../../dialog/settle-up/settle-up.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  openSettleDialog() {
    this.dialog.open(SettleUpComponent);
  }
  owe: any[] = [1, 2, 3];
  owed: any[] = [1, 2];

  constructor(private dialog: MatDialog) {}

  openExpenseDialog() {
    this.dialog.open(ExpensedialogComponent, {
      maxWidth: '80%',
      width: '800px',
    });
  }
}
