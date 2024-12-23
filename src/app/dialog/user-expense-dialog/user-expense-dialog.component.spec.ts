import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpenseDialogComponent } from './user-expense-dialog.component';

describe('UserExpenseDialogComponent', () => {
  let component: UserExpenseDialogComponent;
  let fixture: ComponentFixture<UserExpenseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExpenseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserExpenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
