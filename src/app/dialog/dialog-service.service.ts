import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  private group = new BehaviorSubject<any>(null);
  group$ = this.group.asObservable();
  private user = new BehaviorSubject<any>(null);
  user$ = this.user.asObservable();
  private userData = new BehaviorSubject<any>({});
  userData$ = this.userData.asObservable();
  userName: string = 'akshay';

  constructor(private http: HttpClient) {
    this.http
      .get<any>('http://localhost:8080/v1/user/' + this.userName)
      .subscribe({
        next: (response) => {
          this.userData.next(response); // Set the response to the variable
          console.log('User Data:', response); // Optional: log the response for debugging
        },
        error: (err) => {
          console.error('Error fetching user data:', err); // Handle errors
        },
      });
  }

  addFriends(friendNames: string[]) {
    this.http
      .patch<any>('http://localhost:8080/v1/add-friend-to-user', {
        user_name: this.userName,
        friend: friendNames[0],
      })
      .subscribe({
        next: (response) => {
          console.log('PATCH response:', response);
          this.userData.next(response);
        },
        error: (err) => {
          console.error('PATCH error:', err);
        },
      });
  }

  sendUser(user: any): void {
    this.user.next(user);
  }

  sendGroup(group: any): void {
    this.group.next(group);
  }
}
