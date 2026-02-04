import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

import { LayoutComponent } from './layout/layout.component';

import { LoginComponent } from './features/auth/login/login.component';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { HomeRedirectComponent } from './shared/components/home-redirect/home-redirect.component';

import { ClientDashboardComponent } from './features/client/dashboard/client-dashboard/client-dashboard.component';
import { DebtorsListComponent } from './features/client/debtors/debtors-list/debtors-list.component';
import { BillsListComponent } from './features/client/bills/bills-list/bills-list.component';
import { RequestsListComponent } from './features/client/requests-list/requests-list.component';

import { AdminDashboardComponent } from './features/client/dashboard/admin-dashboard/admin-dashboard.component';
import { AdminReviewComponent } from './features/admin/review/admin-review.component';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeRedirectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'client',
        canActivate: [RoleGuard],
        data: { roles: ['CLIENT'] },
        children: [
          { path: 'dashboard', component: ClientDashboardComponent },
          { path: 'debtors', component: DebtorsListComponent },
          { path: 'bills', component: BillsListComponent },
          { path: 'requests', component: RequestsListComponent },
        ],
      },
      {
        path: 'admin',
        canActivate: [RoleGuard],
        data: { roles: ['ADMIN'] },
        children: [
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'review', component: AdminReviewComponent },
        ],
      },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
