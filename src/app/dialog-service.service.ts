import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Expense } from './util/expense-details/expense-details.component';

@Injectable({
  providedIn: 'root',
})
export class DialogServiceService {
  public multiplePaidBy = new BehaviorSubject<
    { name: string; amount: number; selected: boolean }[]
  >([]);
  multiplePaidBy$ = this.multiplePaidBy.asObservable();
  public multiplePaidFor = new BehaviorSubject<
    { name: string; amount: number; selected: boolean }[]
  >([]);
  multiplePaidFor$ = this.multiplePaidFor.asObservable();
  public paidByType = new BehaviorSubject<string>('equal');
  paidByType$ = this.paidByType.asObservable();
  public paidForType = new BehaviorSubject<string>('equal');
  paidForType$ = this.paidForType.asObservable();
  private group = new BehaviorSubject<any>(null);
  group$ = this.group.asObservable();
  private user = new BehaviorSubject<any>(null);
  user$ = this.user.asObservable();
  private userData = new BehaviorSubject<any>({});
  userData$ = this.userData.asObservable();
  userName: string = 'akshay';
  private dashboardData = new BehaviorSubject<any>(null);
  dashboardData$ = this.dashboardData.asObservable();
  private friendData = new BehaviorSubject<any>(null);
  friendData$ = this.friendData.asObservable();
  private groupData = new BehaviorSubject<any>(null);
  groupData$ = this.groupData.asObservable();
  private allTransaction = new BehaviorSubject<any>(null);
  allTransaction$ = this.allTransaction.asObservable();
  private usersGroup = new BehaviorSubject<any>(null);
  usersGroup$ = this.usersGroup.asObservable();

  sendSettleUp(data: any) {
    this.http.post<any>('http://localhost:8080/v1/settle-up', data).subscribe({
      next: (response) => {
        console.log('Post response:', response);
        this.getCurrUser();
      },
      error: (err) => {
        console.error('Post error:', err);
      },
    });
  }
  sendExpense(expense: Expense) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // console.log(JSON.stringify(expense));
    this.http
      .post<any>('http://localhost:8080/v1/expense', JSON.stringify(expense), {
        headers,
      })
      .subscribe({
        next: (response) => {
          console.log('Post response:', response);
          this.getCurrUser();
        },
        error: (err) => {
          console.error('Post error:', err);
        },
      });
  }
  getUsersGroup() {
    this.http
      .get<any>('http://localhost:8080/v1/groups/user/' + this.userName)
      .subscribe({
        next: (response) => {
          this.usersGroup.next(response); // Set the response to the variable
          console.log('User group Data:', response); // Optional: log the response for debugging
        },
        error: (err) => {
          console.error('Error fetching user group data:', err); // Handle errors
        },
      });
  }
  getAllTransaction() {
    this.http
      .get<any>('http://localhost:8080/v1/all/report/' + this.userName)
      .subscribe({
        next: (response) => {
          this.allTransaction.next(response); // Set the response to the variable
          console.log('Friend Data:', response); // Optional: log the response for debugging
        },
        error: (err) => {
          console.error('Error fetching Friend data:', err); // Handle errors
        },
      });
  }
  getFriendData(friendName: string) {
    this.http
      .get<any>(
        'http://localhost:8080/v1/friend/report/' +
          this.userName +
          '/' +
          friendName
      )
      .subscribe({
        next: (response) => {
          this.friendData.next(response); // Set the response to the variable
          console.log('Friend Data:', response); // Optional: log the response for debugging
        },
        error: (err) => {
          console.error('Error fetching Friend data:', err); // Handle errors
        },
      });
  }

  getGroupData(groupName: string) {
    this.http
      .get<any>(
        'http://localhost:8080/v1/group/report/' +
          groupName +
          '/' +
          this.userName
      )
      .subscribe({
        next: (response) => {
          this.groupData.next(response); // Set the response to the variable
          console.log('Group Data:', response); // Optional: log the response for debugging
        },
        error: (err) => {
          console.error('Error fetching Group data:', err); // Handle errors
        },
      });
  }
  addGroup(groupName: any, friendNames: string[]) {
    friendNames[friendNames.length] = this.userName;
    this.http
      .post<any>('http://localhost:8080/v1/group', {
        group_name: groupName,
        users: friendNames,
      })
      .subscribe({
        next: (response) => {
          console.log('Post response:', response);
          this.getCurrUser();
        },
        error: (err) => {
          console.error('Post error:', err);
        },
      });
  }

  constructor(private http: HttpClient) {
    this.getCurrUser();
    this.getDashboardData();
  }

  getCurrUser() {
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

  getDashboardData() {
    this.http
      .get<any>('http://localhost:8080/v1/dashboard/report/' + this.userName)
      .subscribe({
        next: (response) => {
          this.dashboardData.next(response); // Set the response to the variable
          console.log('Dashboard Data:', response); // Optional: log the response for debugging
        },
        error: (err) => {
          console.error('Error fetching Dashboard data:', err); // Handle errors
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
