import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpensedialogComponent } from '../../finalComponent/dialogs/expensedialog/expensedialog.component';
import { SettleUpComponent } from '../../dialog/settle-up/settle-up.component';
import { CommonModule } from '@angular/common';
import { SplitKeyPipePipe } from '../../util/split-key-pipe.pipe';
import { TransactionComponent } from '../transaction/transaction.component';
import { DialogServiceService } from '../../dialog-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-group-transaction',
  standalone: true,
  imports: [CommonModule, SplitKeyPipePipe, TransactionComponent, RouterModule],
  templateUrl: './group-transaction.component.html',
  styleUrl: './group-transaction.component.css',
})
export class GroupTransactionComponent {
  groupName: string = '';
  oweMap: any;
  groupTransaction: any;
  groupId: any;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.groupId = params['groupId'];
      this.dialogService.getGroupData(this.groupId); // Access the `id` parameter
    });

    this.dialogService.groupData$.subscribe(
      (
        data: { group_name: string; owe: any; group_transaction: any } | null
      ) => {
        if (data == null) return;
        this.groupName = data.group_name;
        this.oweMap = data.owe;
        this.groupTransaction = data.group_transaction;
      }
    );
  }

  constructor(
    private dialog: MatDialog,
    private dialogService: DialogServiceService,
    private route: ActivatedRoute
  ) {}

  openExpenseDialog() {
    this.dialog.open(ExpensedialogComponent, {
      width: '400px',
    });
  }
  openSettleDialog() {
    this.dialog.open(SettleUpComponent, {
      data: {
        type: 'all',
        user: this.dialogService.userName,
        group: this.groupName,
      },
    });
  }
}
