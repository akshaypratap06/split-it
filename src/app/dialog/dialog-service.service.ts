import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  private group = new BehaviorSubject<any>(null);
  group$ = this.group.asObservable();
  private user = new BehaviorSubject<any>(null);
  user$ = this.user.asObservable();

  sendUser(user: any): void {
    this.user.next(user);
  }

  sendGroup(group: any): void {
    this.group.next(group);
  }
}
