import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogServiceService } from '../../dialog/dialog-service.service';
import { ExpensedialogComponent } from '../../dialog/expensedialog/expensedialog.component';
import { SettleUpComponent } from '../../dialog/settle-up/settle-up.component';
import { TransactionComponent } from '../transaction/transaction.component';

interface FriendTransaction {
  description: string;
  date_time: string;
  you_owe: number;
  you_owed: number;
  paid_by: Record<string, number>; // Paid by different people with amounts
  paid_for: Record<string, number>; // Paid for other people with amounts
  total_money: number;
}
@Component({
  selector: 'app-friend-transaction',
  standalone: true,
  imports: [TransactionComponent],
  templateUrl: './friend-transaction.component.html',
  styleUrl: './friend-transaction.component.css',
})
export class FriendTransactionComponent {
  friendName: string = '';
  youOwe: string = '';
  friendTransaction: FriendTransaction[] = [];
  youOwed: string = '';
  ngOnInit() {
    this.dialogService.getFriendData('pratap');
    this.dialogService.friendData$.subscribe((data) => {
      if (data == null) return;
      this.friendName = data.friend_name;
      this.youOwe = data.you_owe_friend;
      this.youOwed = data.friend_owe_you;
      this.friendTransaction = data.friend_transaction;
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
