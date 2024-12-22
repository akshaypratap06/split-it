import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpensedialogComponent } from '../../expensedialog/expensedialog.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  owe: any[] = [1, 2, 3];
  owed: any[] = [1, 2];

  constructor(private dialog: MatDialog) {}

  openExpenseDialog() {
    this.dialog.open(ExpensedialogComponent, {});
  }
}
