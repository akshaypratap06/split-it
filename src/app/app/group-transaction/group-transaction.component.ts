import { Component } from '@angular/core';
import { DialogServiceService } from '../../dialog/dialog-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ExpensedialogComponent } from '../../dialog/expensedialog/expensedialog.component';
import { SettleUpComponent } from '../../dialog/settle-up/settle-up.component';
import { CommonModule } from '@angular/common';
import { SplitKeyPipePipe } from '../../util/split-key-pipe.pipe';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-group-transaction',
  standalone: true,
  imports: [CommonModule, SplitKeyPipePipe, TransactionComponent],
  templateUrl: './group-transaction.component.html',
  styleUrl: './group-transaction.component.css',
})
export class GroupTransactionComponent {
  groupName: string = '';
  oweMap: any;
  groupTransaction: any;
  ngOnInit() {
    this.dialogService.getGroupData('default');
    this.dialogService.groupData$.subscribe((data) => {
      if (data == null) return;
      this.groupName = data.group_name;
      this.oweMap = data.owe;
      this.groupTransaction = data.group_transaction;
    });
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
  openSettleDialog() {
    this.dialog.open(SettleUpComponent);
  }
}
