import { Component } from '@angular/core';
import { DialogListComponent } from '../../../util/dialog-list/dialog-list.component';

@Component({
  selector: 'app-currency-list',
  standalone: true,
  imports: [DialogListComponent],
  templateUrl: './currency-list.component.html',
  styleUrl: './currency-list.component.css',
})
export class CurrencyListComponent {
  getAllCurrency() {
    return [7, 8, 9];
  }
}
