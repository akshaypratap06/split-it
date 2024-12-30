import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitlePipe } from '../../title.pipe';
interface FriendTransaction {
  description: string;
  date_time: string;
  you_owe: number;
  you_owed: number;
  paid_by: Record<string, number>; // Paid by different people with amounts
  paid_for: Record<string, number>; // Paid for other people with amounts
  total_money: number;
}
@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, TitlePipe],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  @Input({ required: true })
  transaction!: FriendTransaction;

  openTab: boolean = false;

  onClick() {
    this.openTab = !this.openTab;
  }
}
