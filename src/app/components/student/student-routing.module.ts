import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentComponent,
  children: [

    {
      path: 'setting-edit-profile',
      loadChildren: () =>
        import('./setting-edit-profile/setting-edit-profile.module').then(
          (m) => m.SettingEditProfileModule
        ),
    },

    //lien add demande

    {
      path: 'demande',
      loadChildren: () =>
        import('./adddemande/adddemande.module').then(
          (m) => m.AdddemandeModule
        ),
    },

    {
      path: 'setting-expert-accounts',
      loadChildren: () =>
        import('./setting-student-accounts/setting-student-accounts.module').then(
          (m) => m.SettingStudentAccountsModule
        ),
    },
    {
      path: 'setting-expert-billing',
      loadChildren: () =>
        import('./setting-student-billing/setting-student-billing.module').then(
          (m) => m.SettingStudentBillingModule
        ),
    },
    {
      path: 'setting-expert-invoice',
      loadChildren: () =>
        import('./setting-student-invoice/setting-student-invoice.module').then(
          (m) => m.SettingStudentInvoiceModule
        ),
    },
    {
      path: 'setting-expert-notification',
      loadChildren: () =>
        import(
          './setting-student-notification/setting-student-notification.module'
        ).then((m) => m.SettingStudentNotificationModule),
    },
    {
      path: 'setting-expert-payment',
      loadChildren: () =>
        import('./setting-student-payment/setting-student-payment.module').then(
          (m) => m.SettingStudentPaymentModule
        ),
    },
    {
      path: 'setting-expert-privacy',
      loadChildren: () =>
        import('./setting-student-privacy/setting-student-privacy.module').then(
          (m) => m.SettingStudentPrivacyModule
        ),
    },
    {
      path: 'setting-expert-referral',
      loadChildren: () =>
        import('./setting-student-referral/setting-student-referral.module').then(
          (m) => m.SettingStudentReferralModule
        ),
    },
    {
      path: 'setting-expert-security',
      loadChildren: () =>
        import('./setting-student-security/setting-student-security.module').then(
          (m) => m.SettingStudentSecurityModule
        ),
    },
    {
      path: 'setting-expert-social-profile',
      loadChildren: () =>
        import(
          './setting-student-social-profile/setting-student-social-profile.module'
        ).then((m) => m.SettingStudentSocialProfileModule),
    },
    {
      path: 'expert-view',
      loadChildren: () =>
        import('./student-view/student-view.module').then(
          (m) => m.StudentViewModule
        ),
    },
    {
      path: 'setting-expert-subscription',
      loadChildren: () =>
        import(
          './setting-student-subscription/setting-student-subscription.module'
        ).then((m) => m.SettingStudentSubscriptionModule),
    },
    {
      path: 'setting-support-tickets',
      loadChildren: () =>
        import('./setting-support-tickets/setting-support-tickets.module').then(
          (m) => m.SettingSupportTicketsModule
        ),
    },
    {
      path: 'expert-profile',
      loadChildren: () =>
        import('./student-profile/student-profile.module').then(
          (m) => m.StudentProfileModule
        ),
    },
    {
      path: 'setting-expert-delete-profile',
      loadChildren: () =>
        import(
          './setting-student-delete-profile/setting-student-delete-profile.module'
        ).then((m) => m.SettingStudentDeleteProfileModule),
    },
    {
      path: 'view-invoice',
      loadChildren: () =>
        import(
          './view-invoice/view-invoice.module'
        ).then((m) => m.ViewInvoiceModule),
    },
  ]
},
  { path: 'deposit-expert', loadChildren: () => import('./deposit-student/deposit-student.module').then(m => m.DepositStudentModule) },
  { path: 'course-expert', loadChildren: () => import('./course-student/course-student.module').then(m => m.CourseStudentModule) },
  { path: 'transactions-expert', loadChildren: () => import('./transactions-student/transactions-student.module').then(m => m.TransactionsStudentModule) },
  { path: 'setting-support-new-tickets', loadChildren: () => import('./setting-support-new-tickets/setting-support-new-tickets.module').then(m => m.SettingSupportNewTicketsModule) },
  { path: 'setting-support-view-tickets', loadChildren: () => import('./setting-support-view-tickets/setting-support-view-tickets.module').then(m => m.SettingSupportViewTicketsModule) },
  {
    path: 'deposit-expert-dashboard',
    loadChildren: () =>
      import(
        './deposit-student-dashboard/deposit-student-dashboard.module'
      ).then((m) => m.DepositStudentDashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
