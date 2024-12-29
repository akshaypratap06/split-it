import { Component } from '@angular/core';
import { ExpensedialogComponent } from '../../finalComponent/dialogs/expensedialog/expensedialog.component';
import { SettleUpComponent } from '../../dialog/settle-up/settle-up.component';
import { MatDialog } from '@angular/material/dialog';
import { TransactionComponent } from '../transaction/transaction.component';
import { DialogServiceService } from '../../dialog-service.service';
import { FriendTransactionComponent } from '../friend-transaction/friend-transaction.component';

@Component({
  selector: 'app-all-transaction',
  standalone: true,
  imports: [TransactionComponent],
  templateUrl: './all-transaction.component.html',
  styleUrl: './all-transaction.component.css',
})
export class AllTransactionComponent {
  youOwe: string = '';
  allTransaction: any;
  youOwed: string = '';
  openExpenseDialog() {
    this.dialog.open(ExpensedialogComponent, {
      width: '400px',
    });
  }
  openSettleDialog() {
    this.dialog.open(SettleUpComponent, {
      data: { type: 'all', user: this.dialogService.userName },
    });
  }
  ngOnInit() {
    this.dialogService.getAllTransaction();
    this.dialogService.allTransaction$.subscribe(
      (
        data: {
          you_owe_friend: string;
          friend_owe_you: string;
          all_transaction: any;
        } | null
      ) => {
        if (data == null) return;
        this.youOwe = data.you_owe_friend;
        this.youOwed = data.friend_owe_you;
        this.allTransaction = data.all_transaction;
      }
    );
  }
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogServiceService
  ) {}
}
