import { Component, Inject, ViewChild } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-payee-dialog',
  standalone: true,
  imports: [UserListComponent, CommonModule, MatDialogClose],
  templateUrl: './payee-dialog.component.html',
  styleUrl: './payee-dialog.component.css',
})
export class PayeeDialogComponent {
  by: any = 'equal';
  highlight(data: string) {
    this.by = data;
  }
  showList = false;

  showMultiPeople() {
    this.showList = !this.showList;
  }
  payee: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: [{ name: string; amount: string }]
  ) {
    this.payee = this.data;
  }
}
