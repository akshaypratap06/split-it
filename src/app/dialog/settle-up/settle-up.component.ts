import { Component, Inject } from '@angular/core';
import { ExpenseDetailsComponent } from '../../util/expense-details/expense-details.component';
import { GroupExpenseDialogComponent } from '../group-expense-dialog/group-expense-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogServiceService } from '../../dialog-service.service';

@Component({
  selector: 'app-settle-up',
  standalone: true,
  imports: [ExpenseDetailsComponent, GroupExpenseDialogComponent],
  templateUrl: './settle-up.component.html',
  styleUrl: './settle-up.component.css',
})
export class SettleUpComponent {
  cancel() {
    this.dialogRef.close();
  }
  submitRequest() {
    this.dialogService.sendSettleUp(this.data);
    this.dialogRef.close();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SettleUpComponent>,
    private dialogService: DialogServiceService
  ) {}
}
