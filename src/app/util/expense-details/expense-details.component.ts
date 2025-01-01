import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { DialogListComponent } from '../dialog-list/dialog-list.component';
import { CurrencyListComponent } from '../../dialog/currency-list/currency-list.component';
import { UserListComponent } from '../../dialog/user-list/user-list.component';
import { PayeeDialogComponent } from '../../dialog/payee-dialog/payee-dialog.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogServiceService } from '../../dialog-service.service';

export class Expense {
  private paid_by_type: string = 'equal';
  private paid_by: Record<string, number> = {};
  private paid_for: Record<string, number> = {};
  private paid_amount: number = 0;
  private group_id: string = '';
  private paid_for_type: string = 'equal';
  private description: string = '';

  // Getter and Setter for paidByType
  get paidByType(): string {
    return this.paid_by_type;
  }

  set paidByType(value: string) {
    this.paid_by_type = value;
  }

  // Getter and Setter for paidBy
  get paidBy(): Record<string, number> {
    return this.paid_by;
  }

  set paidBy(value: Record<string, number>) {
    this.paid_by = value;
  }

  // Getter and Setter for paidFor
  get paidFor(): Record<string, number> {
    return this.paid_for;
  }

  set paidFor(value: Record<string, number>) {
    this.paid_for = value;
  }

  // Getter and Setter for paidAmount
  get paidAmount(): number {
    return this.paid_amount;
  }

  set paidAmount(value: number) {
    this.paid_amount = value;
  }

  // Getter and Setter for groupId
  get groupId(): string {
    return this.group_id;
  }

  set groupId(value: string) {
    this.group_id = value;
  }

  // Getter and Setter for paidForType
  get paidForType(): string {
    return this.paid_for_type;
  }

  set paidForType(value: string) {
    this.paid_for_type = value;
  }

  // Getter and Setter for description
  get description2(): string {
    return this.description;
  }

  set description2(value: string) {
    this.description = value;
  }
}

@Component({
  selector: 'app-expense-details',
  standalone: true,
  imports: [
    DialogListComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogClose,
    FormsModule,
    CommonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './expense-details.component.html',
  styleUrl: './expense-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseDetailsComponent {
  @Input({ required: true })
  users!: string[];

  @Input()
  groupName: string = 'default';
  amount: string = '';
  description2: any;
  paidBy: { name: string; amount: number; selected: boolean }[] = [];
  paidByString: string = '';
  paidFor: { name: string; amount: number; selected: boolean }[] = [];
  paidForString: string = '';
  paidByType: string = 'equal';
  paidForType: string = 'equal';

  formatToTwoDecimalPlaces() {
    const regex = /^\d*\.?\d{0,2}$/;
    if (!regex.test(this.amount)) {
      this.amount = this.amount.slice(0, -1); // Remove the last character if invalid
    }
  }

  submitRequest() {
    const expense = new Expense();
    expense.description2 = this.description2;
    expense.groupId = this.groupName;
    expense.paidAmount = Number(this.amount);
    if (this.paidByType != 'equal') {
      expense.paidBy = Object.fromEntries(
        this.paidBy.map((item) => [item.name, item.amount])
      );
    } else {
      // console.log('item' + JSON.stringify(this.paidBy));
      expense.paidBy = Object.fromEntries(
        this.paidBy.map((item) => [item.name, 0])
      );
    }
    if (this.paidForType != 'equal') {
      expense.paidFor = Object.fromEntries(
        this.paidFor.map((item) => [item.name, item.amount])
      );
    } else {
      expense.paidFor = Object.fromEntries(
        this.paidFor.map((item) => [item.name, 0])
      );
    }

    expense.paidByType = this.paidByType.toUpperCase();
    expense.paidForType = this.paidForType.toUpperCase();

    this.dialogService.sendExpense(expense);
  }

  getPaidForString() {
    if (this.paidFor.length == 1) return this.paidFor[0].name;
    else return 'Multiple People';
  }

  getPaidByString() {
    if (this.paidBy.length == 1) return this.paidBy[0].name;
    else return 'Multiple People';
  }

  openGroupNames(type: string) {
    this.dialog.open(PayeeDialogComponent, {
      data: { data: this.users, type: type, amount: Number(this.amount) },
    });
  }

  openCurrencyDialog() {
    this.dialog.open(CurrencyListComponent);
  }

  ngOnInit() {
    this.dialogService.multiplePaidBy$.subscribe((data) => {
      if (data == null) return;
      this.paidBy = data.map((p: { name: string; amount: number }) => {
        return { name: p.name, amount: p.amount, selected: true };
      });

      this.paidByString = this.getPaidByString();
      this.cdr.detectChanges();
    });
    this.dialogService.multiplePaidFor$.subscribe((data) => {
      if (data == null) return;
      this.paidFor = data.map((p: { name: string; amount: number }) => {
        return { name: p.name, amount: p.amount, selected: true };
      });
      this.paidForString = this.getPaidForString();
      this.cdr.detectChanges();
    });
    this.dialogService.paidByType$.subscribe((data) => {
      if (data == null) return;
      this.paidByType = data;
      // console.log('type update');
    });
    this.dialogService.paidForType$.subscribe((data) => {
      if (data == null) return;
      this.paidForType = data;
      // console.log('type updated');
    });
    this.paidBy = [
      { name: this.dialogService.userName, amount: 0, selected: true },
    ];
    this.paidByString = this.dialogService.userName;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      console.log(this.users);
      this.paidFor = this.users.map((item) => {
        return { name: item, amount: 0, selected: true };
      });
    }
  }
  constructor(
    private dialog: MatDialog,
    private dialogService: DialogServiceService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('incoming');
    this.amount = '';
    this.paidBy = [];
    this.paidByString = '';
    this.paidFor = [];
    this.paidForString = '';
    this.paidByType = 'equal';
    this.paidForType = 'equal';
  }
  ngOnDestroy() {
    this.dialogService.paidByType.next('equal');
    this.dialogService.paidForType.next('equal');
    this.dialogService.multiplePaidBy.next([]);
    this.dialogService.multiplePaidFor.next([]);
  }
}
