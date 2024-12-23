import { Component, Input } from '@angular/core';
import { DialogServiceService } from '../../dialog/dialog-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-list',
  standalone: true,
  imports: [],
  templateUrl: './dialog-list.component.html',
  styleUrl: './dialog-list.component.css',
})
export class DialogListComponent {
  emitData(data: any) {
    this.dialogRef.close();
    if (data < 4) this.dialogService.sendGroup(data);
    else this.dialogService.sendUser(data);
  }
  @Input()
  items!: any[];

  constructor(
    private dialogService: DialogServiceService,
    private dialogRef: MatDialogRef<DialogListComponent>
  ) {}
}
