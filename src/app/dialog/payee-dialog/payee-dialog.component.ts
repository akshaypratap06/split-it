import { Component, Inject, Input, ViewChild } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DialogServiceService } from '../../dialog-service.service';
@Component({
  selector: 'app-payee-dialog',
  standalone: true,
  imports: [UserListComponent, CommonModule, MatDialogClose, FormsModule],
  templateUrl: './payee-dialog.component.html',
  styleUrl: './payee-dialog.component.css',
})
export class PayeeDialogComponent {
  submitPayBy: { name: string; amount: number; selected: boolean }[] = [];
  submitPayFor: { name: string; amount: number; selected: boolean }[] = [];
  fullAmount: number;
  submitPayee() {
    if (this.by == 'equal') {
      if (this.secondaryType == 'paidBy') {
        this.submitPayBy = this.payee.filter((p) => p.selected);
        if (this.submitPayBy.length < 1) return;
        this.dialogService.multiplePaidBy.next(this.submitPayBy);
        this.dialogService.paidByType.next(this.by);
        this.dialogRef.close();
      } else if (this.secondaryType == 'paidFor') {
        this.submitPayFor = this.payee.filter((p) => p.selected);
        if (this.submitPayFor.length < 1) return;
        this.dialogService.multiplePaidFor.next(this.submitPayFor);
        this.dialogService.paidForType.next(this.by);
        this.dialogRef.close();
      }
    } else if (this.by == 'percentage') {
      if (this.secondaryType == 'paidBy') {
        this.submitPayBy = this.payee.filter((p) => p.amount > 0);
        // console.log(this.submitPayBy);
        if (
          this.submitPayBy.length < 1 ||
          this.submitPayBy
            .map((p: { amount: any }) => Number(p.amount))
            .reduce(
              (accumulator: any, currentValue: any) =>
                accumulator + currentValue,
              0
            ) != 100
        )
          return;
        this.dialogService.multiplePaidBy.next(this.submitPayBy);
        this.dialogService.paidByType.next(this.by);
        this.dialogRef.close();
      } else if (this.secondaryType == 'paidFor') {
        this.submitPayFor = this.payee.filter((p) => p.amount > 0);
        // console.log(this.submitPayBy);
        if (
          this.submitPayFor.length < 1 ||
          this.submitPayFor
            .map((p: { amount: any }) => Number(p.amount))
            .reduce(
              (accumulator: any, currentValue: any) =>
                accumulator + currentValue,
              0
            ) != 100
        )
          return;
        this.dialogService.multiplePaidFor.next(this.submitPayFor);
        this.dialogService.paidForType.next(this.by);
        this.dialogRef.close();
      }
    } else {
      if (this.secondaryType == 'paidBy') {
        this.submitPayBy = this.payee.filter((p) => p.amount > 0);
        console.log(this.submitPayBy);
        if (
          this.submitPayBy.length < 1 ||
          this.submitPayBy
            .map((p: { amount: any }) => Number(p.amount))
            .reduce(
              (accumulator: any, currentValue: any) =>
                accumulator + currentValue,
              0
            ) != this.fullAmount
        )
          return;
        this.dialogService.multiplePaidBy.next(this.submitPayBy);
        this.dialogService.paidByType.next(this.by);
        this.dialogRef.close();
      } else if (this.secondaryType == 'paidFor') {
        this.submitPayFor = this.payee.filter((p) => p.amount > 0);
        // console.log(this.submitPayFor);
        if (
          this.submitPayFor.length < 1 ||
          this.submitPayFor
            .map((p: { amount: any }) => Number(p.amount))
            .reduce(
              (accumulator: any, currentValue: any) =>
                accumulator + currentValue,
              0
            ) != this.fullAmount
        )
          return;
        this.dialogService.multiplePaidFor.next(this.submitPayFor);
        this.dialogService.paidForType.next(this.by);
        this.dialogRef.close();
      }
    }
  }
  by: any = 'equal';
  secondaryType: string;
  users: any[];
  highlight(data: string) {
    this.by = data;
  }
  showList = false;

  showMultiPeople() {
    this.showList = !this.showList;
  }
  payee: [
    {
      selected: any;
      name: string;
      amount: number;
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogService: DialogServiceService,
    private dialogRef: MatDialogRef<PayeeDialogComponent>
  ) {
    this.payee = this.data.data.map((p: string) => ({
      name: p,
      amount: 0,
      selected: false,
    }));
    this.users = this.data.data;
    this.fullAmount = this.data.amount;
    this.secondaryType = this.data.type;
  }
}
