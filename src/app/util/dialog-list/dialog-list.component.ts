import { Component, Input, SimpleChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogServiceService } from '../../dialog-service.service';

@Component({
  selector: 'app-dialog-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-list.component.html',
  styleUrl: './dialog-list.component.css',
})
export class DialogListComponent {
  @Input({ required: true })
  type!: string;
  @Input()
  secondaryType!: string;
  @Input()
  items!: any[];
  filterValue: string = '';
  itemsTemp: any[] = [];
  emitData(data: any) {
    this.dialogRef.close();
    if (this.type == 'group') this.dialogService.sendGroup(data);
    else if (this.secondaryType == 'paidBy')
      this.dialogService.multiplePaidBy.next([
        { name: data, amount: 0, selected: true },
      ]);
    else if (this.secondaryType == 'paidFor')
      this.dialogService.multiplePaidFor.next([
        { name: data, amount: 0, selected: true },
      ]);
    else if (this.type == 'user') this.dialogService.sendUser(data);
  }

  constructor(
    private dialogService: DialogServiceService,
    private dialogRef: MatDialogRef<DialogListComponent>
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] && changes['items'].currentValue) {
      this.itemsTemp = [...this.items];
    }
  }

  filterValueMethod($event: string) {
    this.itemsTemp = this.items.filter((p) => p.includes($event));
  }
}
