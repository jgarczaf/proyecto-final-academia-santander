import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

// Layout
import { LayoutComponent } from './layout/layout.component';

// Auth & shared
import { LoginComponent } from './features/auth/login/login.component';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { HomeRedirectComponent } from './shared/components/home-redirect/home-redirect.component';

// CLIENT
import { ClientDashboardComponent } from './features/client/dashboard/client-dashboard/client-dashboard.component';
import { DebtorsListComponent } from './features/client/debtors/debtors-list/debtors-list.component';
import { BillsListComponent } from './features/client/bills/bills-list/bills-list.component';
import { RequestsListComponent } from './features/client/requests-list/requests-list.component';

// ADMIN
import { AdminDashboardComponent } from './features/client/dashboard/admin-dashboard/admin-dashboard.component';
import { AdminReviewComponent } from './features/admin/review/admin-review.component';

const routes: Routes = [
  // 🔹 Home por rol (FUERA del layout): decide a dónde ir
  { path: '', pathMatch: 'full', component: HomeRedirectComponent },

  // Rutas públicas
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },

  // Rutas autenticadas (layout)
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // CLIENT
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
      // ADMIN
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

  // Fallback
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes /*, { onSameUrlNavigation: 'reload' }*/),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
