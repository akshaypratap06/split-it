import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpensedialogComponent } from '../../finalComponent/dialogs/expensedialog/expensedialog.component';
import { GroupExpenseDialogComponent } from '../../dialog/group-expense-dialog/group-expense-dialog.component';
import { UserExpenseDialogComponent } from '../../dialog/user-expense-dialog/user-expense-dialog.component';
import { SettleUpComponent } from '../../dialog/settle-up/settle-up.component';
import { DialogServiceService } from '../../dialog-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  totalBalance: number = 0;
  youOwe: number = 0;
  youOwed: number = 0;
  owe: any = {};
  owed: any = {};
  openSettleDialog() {
    this.dialog.open(SettleUpComponent, {
      data: { type: 'all', user: this.dialogService.userName },
    });
  }

  ngOnInit() {
    this.dialogService.dashboardData$.subscribe(
      (
        data: {
          total_balance_money: number;
          you_owe_money: number;
          you_owed_money: number;
          you_owe_map: any;
          you_owed_map: any;
        } | null
      ) => {
        console.log(data);
        if (data == null) return;
        this.totalBalance = data.total_balance_money;
        this.youOwe = data.you_owe_money;
        this.youOwed = data.you_owed_money;
        this.owe = data.you_owe_map;
        this.owed = data.you_owed_map;
      }
    );
  }
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogServiceService
  ) {}

  openExpenseDialog() {
    this.dialog.open(ExpensedialogComponent, {
      width: '400px',
    });
  }
}
