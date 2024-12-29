import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogListComponent } from '../../util/dialog-list/dialog-list.component';
import { DialogServiceService } from '../../dialog-service.service';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [DialogListComponent],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css',
})
export class GroupListComponent {
  groupsName: string[] = [];
  type: string = 'group';

  getGroups(): any[] {
    return this.groupsName;
  }

  ngOnInit() {
    this.groupsName = this.data.map(
      (p: { group_name: string }) => p.group_name
    );
  }

  constructor(
    private dialogService: DialogServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
