import { Routes } from '@angular/router';
import { LoghomeComponent } from './app/loghome/loghome.component';
import { HomeComponent } from './finalComponent/home/home.component';
import { SigninComponent } from './finalComponent/signInOutPage/signin/signin.component';
import { SignupComponent } from './finalComponent/signInOutPage/signup/signup.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { FriendTransactionComponent } from './app/friend-transaction/friend-transaction.component';
import { GroupExpenseDialogComponent } from './dialog/group-expense-dialog/group-expense-dialog.component';
import { GroupTransactionComponent } from './app/group-transaction/group-transaction.component';
import { AllTransactionComponent } from './app/all-transaction/all-transaction.component';

export const routes: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: '',
    component: LoghomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'friend/:userId', component: FriendTransactionComponent },
      { path: 'group/:groupId', component: GroupTransactionComponent },
      { path: 'all', component: AllTransactionComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
];
