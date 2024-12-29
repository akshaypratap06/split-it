import { Component, Inject, Input } from '@angular/core';
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
  @Input()
  users!: any[];
  type: string = 'user';
  @Input()
  secondaryType: any;

  getUsers(): any[] {
    return this.users;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.users = this.data;
  }
}
