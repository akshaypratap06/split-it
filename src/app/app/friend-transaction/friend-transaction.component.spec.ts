import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendTransactionComponent } from './friend-transaction.component';

describe('FriendTransactionComponent', () => {
  let component: FriendTransactionComponent;
  let fixture: ComponentFixture<FriendTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
