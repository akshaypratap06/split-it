import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupListComponent } from '../group-list/group-list.component';
import { group } from '@angular/animations';
import { DialogServiceService } from '../../dialog-service.service';
import { ExpenseDetailsComponent } from '../../util/expense-details/expense-details.component';

@Component({
  selector: 'app-group-expense-dialog',
  standalone: true,
  imports: [ExpenseDetailsComponent],
  templateUrl: './group-expense-dialog.component.html',
  styleUrl: './group-expense-dialog.component.css',
})
export class GroupExpenseDialogComponent {
  groupName!: string;
  userGroups: any;
  users: string[] = [];
  ngOnInit() {
    this.dialogService.getUsersGroup();
    this.dialogService.usersGroup$.subscribe((data) => {
      if (data == null) return;
      this.userGroups = data;

      this.users = data
        .filter((p: { group_name: any }) => p.group_name === this.groupName)
        .map((p: { users: any }) => p.users)[0]
        .map((p: { user_name: any }) => p.user_name);
      console.log(this.users);
    });
    this.dialogService.group$.subscribe((data: string) => {
      if (data) {
        this.groupName = data; // Update the UI with the received data
      } else {
        this.groupName = 'default';
      }
    });
  }
  openGroupList() {
    this.dialog.open(GroupListComponent, { data: this.userGroups });
  }
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogServiceService
  ) {}
}
