import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupExpenseDialogComponent } from './group-expense-dialog.component';

describe('GroupExpenseDialogComponent', () => {
  let component: GroupExpenseDialogComponent;
  let fixture: ComponentFixture<GroupExpenseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupExpenseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupExpenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
