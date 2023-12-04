import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './main-features/users/users.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { AttendanceComponent } from './main-features/attendance/attendance.component';
import { LeaveComponent } from './main-features/leaves/leaves.component';
import { LeaveDetailComponent } from './main-features/leave-detail/leave-detail.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';
import { SettingsComponent } from './main-features/settings/settings.component';
import { HomeComponent } from './main-features/home/home.component';
import { ItSupportComponent } from './main-features/it-support/it-support.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path:'attendance',component:AttendanceComponent},
    {path: 'leaves', component: LeaveComponent},
    {path: 'leaves/:id/:name', component: LeaveDetailComponent},
    {path: 'user-detail', component: UserDetailComponent},
    {path : 'analytics', component: AnalyticsComponent},
    { path: 'settings', component: SettingsComponent },
    {path: 'it-support', component: ItSupportComponent},
      
];
