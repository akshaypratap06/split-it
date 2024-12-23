import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogServiceService } from '../dialog-service.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-expense-dialog',
  standalone: true,
  imports: [],
  templateUrl: './user-expense-dialog.component.html',
  styleUrl: './user-expense-dialog.component.css',
})
export class UserExpenseDialogComponent {
  userName: any;
  ngOnInit() {
    this.dialogService.user$.subscribe((data: any) => {
      if (data) {
        this.userName = data; // Update the UI with the received data
      } else {
        this.userName = 'No User';
      }
    });
  }
  openUserList() {
    this.dialog.open(UserListComponent);
  }
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogServiceService
  ) {}
}
