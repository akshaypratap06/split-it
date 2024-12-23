import { Component } from '@angular/core';
import { DialogServiceService } from '../dialog-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogListComponent } from '../../util/dialog-list/dialog-list.component';
import { group } from '@angular/animations';
import { GroupsComponent } from '../../groups/groups.component';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [DialogListComponent],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css',
})
export class GroupListComponent {
  groups: any[] = [1, 2, 3];
  getGroups(): any[] {
    return this.groups;
  }
}
