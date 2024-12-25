import { Component, OnInit } from '@angular/core';
import { GroupsComponent } from '../../groups/groups.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { DialogServiceService } from '../../dialog/dialog-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFriendsComponent } from '../../dialog/add-friends/add-friends.component';

@Component({
  selector: 'app-loghome',
  standalone: true,
  imports: [GroupsComponent, DashboardComponent],
  templateUrl: './loghome.component.html',
  styleUrl: './loghome.component.css',
})
export class LoghomeComponent implements OnInit {
  openAddFriend() {
    this.dialog.open(AddFriendsComponent);
  }
  ngOnInit(): void {
    this.dialogService.userData$.subscribe((data) => {
      console.log(data);
      if (data == null) return;
      this.friends = data.friends;
      this.groups = data.groups;
      // Log the response to the console
    });
  }
  constructor(
    private dialogService: DialogServiceService,
    private dialog: MatDialog
  ) {}
  groups: any[] = [];
  friends: any[] = [];
}
