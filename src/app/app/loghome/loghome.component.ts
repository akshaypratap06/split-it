import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddNewGroupComponent } from '../../dialog/add-new-group/add-new-group.component';
import { FormsModule } from '@angular/forms';
import { FriendTransactionComponent } from '../friend-transaction/friend-transaction.component';
import { GroupTransactionComponent } from '../group-transaction/group-transaction.component';
import { AllTransactionComponent } from '../all-transaction/all-transaction.component';
import { AddFriendsComponent } from '../../dialog/add-friends/add-friends.component';
import { DialogServiceService } from '../../dialog-service.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loghome',
  standalone: true,
  imports: [RouterOutlet, FormsModule, GroupTransactionComponent, RouterModule],
  templateUrl: './loghome.component.html',
  styleUrl: './loghome.component.css',
})
export class LoghomeComponent implements OnInit {
  onValueChange(filterString: string) {
    if (filterString == '') {
      this.groupsTemp = this.groups;
      this.friendsTemp = this.friends;
    } else {
      this.groupsTemp = this.groups.filter((item) =>
        item.group_name.toLowerCase().includes(filterString.toLowerCase())
      );
      this.friendsTemp = this.friends.filter((item) =>
        item.toLowerCase().includes(filterString.toLowerCase())
      );
    }
  }
  filterValue: string = '';
  openAddNewGroup() {
    this.dialog.open(AddNewGroupComponent);
  }
  openAddFriend() {
    this.dialog.open(AddFriendsComponent);
  }
  ngOnInit(): void {
    this.dialogService.userData$.subscribe(
      (data: { friends: any[]; groups: any[] } | null) => {
        console.log(data);
        if (data == null) return;
        this.friends = data.friends;
        this.groups = data.groups;
        this.friendsTemp = this.friends;
        this.groupsTemp = this.groups;
        // Log the response to the console
      }
    );
  }
  constructor(
    private dialogService: DialogServiceService,
    private dialog: MatDialog
  ) {}
  groups: any[] = [];
  friends: any[] = [];
  groupsTemp: any[] = [];
  friendsTemp: any[] = [];
}
