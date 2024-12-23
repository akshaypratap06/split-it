import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupListComponent } from '../group-list/group-list.component';
import { DialogServiceService } from '../dialog-service.service';
import { group } from '@angular/animations';
import { ExpenseDetailsComponent } from '../../util/expense-details/expense-details.component';

@Component({
  selector: 'app-group-expense-dialog',
  standalone: true,
  imports: [ExpenseDetailsComponent],
  templateUrl: './group-expense-dialog.component.html',
  styleUrl: './group-expense-dialog.component.css',
})
export class GroupExpenseDialogComponent {
  groupName: any;
  ngOnInit() {
    this.dialogService.group$.subscribe((data) => {
      if (data) {
        this.groupName = data; // Update the UI with the received data
      } else {
        this.groupName = 'No Group';
      }
    });
  }
  openGroupList() {
    this.dialog.open(GroupListComponent);
  }
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogServiceService
  ) {}
}
