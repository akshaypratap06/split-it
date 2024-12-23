import { Component, Inject } from '@angular/core';
import { DialogListComponent } from '../../util/dialog-list/dialog-list.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [DialogListComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: any[] = [4, 5, 6];
  getUsers(): any[] {
    return this.users;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public user: []) {
    this.users = user;
  }
}
