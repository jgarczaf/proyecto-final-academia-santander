import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { defineCustomElements } from '../libraries/@aletehia2/core/loader';
import { AletheiaComponentLibraryModule } from '../libraries/@aletehia2/angular';

import { MAT_DATE_LOCALE } from '@angular/material/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';

import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { DebtorsListComponent } from './features/client/debtors/debtors-list/debtors-list.component';
import { DebtorDialogComponent } from './features/client/debtors/debtor-dialog/debtor-dialog.component';
import { BillsListComponent } from './features/client/bills/bills-list/bills-list.component';
import { RequestsListComponent } from './features/client/requests-list/requests-list.component';
import { AdminReviewComponent } from './features/admin/review/admin-review.component';
import { ClientDashboardComponent } from './features/client/dashboard/client-dashboard/client-dashboard.component';
import { AdminDashboardComponent } from './features/client/dashboard/admin-dashboard/admin-dashboard.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { BillDialogComponent } from './features/client/bills/bill-dialog/bill-dialog.component';
import { HomeRedirectComponent } from './shared/components/home-redirect/home-redirect.component';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';

registerLocaleData(localeEs);
defineCustomElements(window);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    ForbiddenComponent,
    DebtorsListComponent,
    DebtorDialogComponent,
    BillsListComponent,
    BillDialogComponent,
    RequestsListComponent,
    AdminReviewComponent,
    ClientDashboardComponent,
    AdminDashboardComponent,
    ConfirmDialogComponent,
    HomeRedirectComponent,
    SignInComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatOptionModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatChipsModule,
    MatTabsModule,
    AletheiaComponentLibraryModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
