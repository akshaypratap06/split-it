import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTransactionComponent } from './group-transaction.component';

describe('GroupTransactionComponent', () => {
  let component: GroupTransactionComponent;
  let fixture: ComponentFixture<GroupTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
