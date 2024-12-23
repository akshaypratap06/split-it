import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GroupExpenseDialogComponent } from '../group-expense-dialog/group-expense-dialog.component';
import { UserExpenseDialogComponent } from '../user-expense-dialog/user-expense-dialog.component';
@Component({
  selector: 'app-expensedialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './expensedialog.component.html',
  styleUrl: './expensedialog.component.css',
})
export class ExpensedialogComponent {
  openUserDialog() {
    this.dialog.closeAll();
    this.dialog.open(UserExpenseDialogComponent);
  }
  openGroupDialog() {
    this.dialog.closeAll();
    this.dialog.open(GroupExpenseDialogComponent);
  }
  constructor(private dialog: MatDialog) {}
}
