import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogServiceService } from '../../dialog-service.service';

@Component({
  selector: 'app-add-friends',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-friends.component.html',
  styleUrl: './add-friends.component.css',
})
export class AddFriendsComponent {
  addFriendString: string = '';
  issueWithInput: boolean = false;

  constructor(
    private dialogService: DialogServiceService,
    public dialogRef: MatDialogRef<AddFriendsComponent>
  ) {}

  submitAddFriendRequest() {
    const friendArr = this.addFriendString.split(';');
    const friendNames = friendArr.filter((item) => item !== '');
    if (friendNames.length > 10 || friendNames.length < 1) {
      this.issueWithInput = true;
      return;
    }
    this.issueWithInput = false;
    this.dialogRef.close();
    this.dialogService.addFriends(friendNames);
  }
}
