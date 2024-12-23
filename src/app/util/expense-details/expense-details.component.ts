import { Component } from '@angular/core';
import { DialogListComponent } from '../dialog-list/dialog-list.component';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyListComponent } from '../../dialog/currency-list/currency-list.component';
import { UserListComponent } from '../../dialog/user-list/user-list.component';
import { PayeeDialogComponent } from '../../dialog/payee-dialog/payee-dialog.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-expense-details',
  standalone: true,
  imports: [
    DialogListComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './expense-details.component.html',
  styleUrl: './expense-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseDetailsComponent {
  paidBy: any[] = ['You'];
  paidByString: any = 'You';
  paidFor: any[] = ['Aditya'];
  paidForString: any = 'Multiple People';
  getPaidForString() {
    if (this.paidBy.length > 1) return this.paidFor[0];
    else return 'Multiple People';
  }

  openGroupNames() {
    this.dialog.open(PayeeDialogComponent, {
      data: [
        { name: 'Alice', amount: '25' },
        { name: 'Bob', amount: '30' },
        { name: 'Charlie', amount: '35' },
      ],
    });
  }

  openCurrencyDialog() {
    this.dialog.open(CurrencyListComponent);
  }

  getPaidByString() {
    if (this.paidBy.length > 1) return 'Multiple People';
    else return this.paidBy[0];
  }

  constructor(private dialog: MatDialog) {}
}
