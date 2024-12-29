import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserListComponent } from '../user-list/user-list.component';
import { ExpenseDetailsComponent } from '../../util/expense-details/expense-details.component';
import { DialogServiceService } from '../../dialog-service.service';

@Component({
  selector: 'app-user-expense-dialog',
  standalone: true,
  imports: [ExpenseDetailsComponent],
  templateUrl: './user-expense-dialog.component.html',
  styleUrl: './user-expense-dialog.component.css',
})
export class UserExpenseDialogComponent {
  userName: any;
  users: string[] = [];
  ngOnInit() {
    this.dialogService.getCurrUser();
    this.dialogService.userData$.subscribe((data) => {
      if (data == null) return;
      this.users = data.friends;
      this.users[this.users.length] = this.dialogService.userName;
    });
    this.dialogService.user$.subscribe((data: any) => {
      if (data) {
        this.userName = data; // Update the UI with the received data
      } else {
        this.userName = 'No User';
      }
    });
  }
  openUserList() {
    this.dialog.open(UserListComponent, { data: this.users });
  }
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogServiceService
  ) {}
}
