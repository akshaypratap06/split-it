import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddFriendsComponent } from '../add-friends/add-friends.component';
import { DialogServiceService } from '../dialog-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-group',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-group.component.html',
  styleUrl: './add-new-group.component.css',
})
export class AddNewGroupComponent {
  submitAddGroupRequest() {
    const friendArr = this.addUserList.split(';');
    const friendNames = friendArr.filter((item) => item !== '');
    if (friendNames.length > 10 || friendNames.length < 1) {
      this.issueWithInput = true;
      return;
    }
    this.issueWithInput = false;
    this.dialogRef.close();
    this.dialogService.addGroup(this.groupName, friendNames);
  }
  issueWithInput: boolean = false;
  groupName: any = '';
  addUserList: string = '';

  constructor(
    private dialogService: DialogServiceService,
    public dialogRef: MatDialogRef<AddFriendsComponent>
  ) {}
}
