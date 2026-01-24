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

// CLIENT features
import { ClientDashboardComponent } from './features/client/dashboard/client-dashboard/client-dashboard.component';
import { DebtorsListComponent } from './features/client/debtors/debtors-list/debtors-list.component';
import { DebtorDialogComponent } from './features/client/debtors/debtors-dialog/debtors-dialog.component';
import { BillsListComponent } from './features/client/bills-list/bills-list.component';
import { RequestsListComponent } from './features/client/requests-list/requests-list.component';

// ADMIN features
import { AdminDashboardComponent } from './features/client/dashboard/admin-dashboard/admin-dashboard.component';
import { AdminReviewComponent } from './features/admin/review/admin-review.component';

const routes: Routes = [
  // Rutas públicas
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },

  // Rutas autenticadas (todo lo que va con toolbar/sidenav vive dentro de Layout)
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // Área CLIENT
      {
        path: 'client',
        canActivate: [RoleGuard],
        data: { roles: ['CLIENT'] },
        children: [
          { path: 'dashboard', component: ClientDashboardComponent },
          { path: 'debtors', component: DebtorsListComponent },
          { path: 'bills', component: BillsListComponent },
          { path: 'requests', component: RequestsListComponent },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
      },

      // Área ADMIN
      {
        path: 'admin',
        canActivate: [RoleGuard],
        data: { roles: ['ADMIN'] },
        children: [
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'review', component: AdminReviewComponent },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
      },

      // Redirección por defecto cuando está autenticado (puedes cambiarlo)
      { path: '', redirectTo: '/client/dashboard', pathMatch: 'full' },
    ],
  },

  // Fallbacks
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
