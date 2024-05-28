import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorComponent,
    children: [
      {
        path: 'instructor-chat',
        loadChildren: () =>
          import('./instructor-chat/instructor-chat.module').then(
            (m) => m.InstructorChatModule
          ),
      },
      {
        path: 'instructor-course',
        loadChildren: () =>
          import('./instructor-course/instructor-course.module').then(
            (m) => m.InstructorCourseModule
          ),
      },
      {
        path: 'instructor-dashboard',
        loadChildren: () =>
          import('./instructor-dashboard/instructor-dashboard.module').then(
            (m) => m.InstructorDashboardModule
          ),
      },
      {
        path: 'instructor-delete-profile',
        loadChildren: () =>
          import(
            './instructor-delete-profile/instructor-delete-profile.module'
          ).then((m) => m.InstructorDeleteProfileModule),
      },
      {
        path: 'instructor-earnings',
        loadChildren: () =>
          import('./instructor-earnings/instructor-earnings.module').then(
            (m) => m.InstructorEarningsModule
          ),
      },
      {
        path: 'instructor-edit-profile',
        loadChildren: () =>
          import(
            './instructor-edit-profile/instructor-edit-profile.module'
          ).then((m) => m.InstructorEditProfileModule),
      },
      {
        path: 'instructor-linked-account',
        loadChildren: () =>
          import(
            './instructor-linked-account/instructor-linked-account.module'
          ).then((m) => m.InstructorLinkedAccountModule),
      },
      {
        path: 'instructor-notification',
        loadChildren: () =>
          import(
            './instructor-notification/instructor-notification.module'
          ).then((m) => m.InstructorNotificationModule),
      },
      {
        path: 'instructor-orders',
        loadChildren: () =>
          import('./instructor-orders/instructor-orders.module').then(
            (m) => m.InstructorOrdersModule
          ),
      },
      {
        path: 'instructor-payouts',
        loadChildren: () =>
          import('./instructor-payouts/instructor-payouts.module').then(
            (m) => m.InstructorPayoutsModule
          ),
      },
      {
        path: 'instructor-profile',
        loadChildren: () =>
          import('./instructor-profile/instructor-profile.module').then(
            (m) => m.InstructorProfileModule
          ),
      },
      {
        path: 'instructor-profile-privacy',
        loadChildren: () =>
          import(
            './instructor-profile-privacy/instructor-profile-privacy.module'
          ).then((m) => m.InstructorProfilePrivacyModule),
      },
      {
        path: 'instructor-reviews',
        loadChildren: () =>
          import('./instructor-reviews/instructor-reviews.module').then(
            (m) => m.InstructorReviewsModule
          ),
      },
      {
        path: 'instructor-security',
        loadChildren: () =>
          import('./instructor-security/instructor-security.module').then(
            (m) => m.InstructorSecurityModule
          ),
      },
      {
        path: 'instructor-social-profiles',
        loadChildren: () =>
          import(
            './instructor-social-profiles/instructor-social-profiles.module'
          ).then((m) => m.InstructorSocialProfilesModule),
      },
      {
        path: 'instructor-expert-grid',
        loadChildren: () =>
          import(
            './instructor-student-grid/instructor-student-grid.module'
          ).then((m) => m.InstructorStudentGridModule),
      },
      {
        path: 'instructor-tickets',
        loadChildren: () =>
          import('./instructor-tickets/instructor-tickets.module').then(
            (m) => m.InstructorTicketsModule
          ),
      },
      {
        path: 'instructor-view',
        loadChildren: () =>
          import('./instructor-view/instructor-view.module').then(
            (m) => m.InstructorViewModule
          ),
      },
      {
        path: 'deposit-instructor-dashboard',
        loadChildren: () =>
          import(
            './deposit-instructor-dashboard/deposit-instructor-dashboard.module'
          ).then((m) => m.DepositInstructorDashboardModule),
      },
      {
        path: 'instructor-new-tickets',
        loadChildren: () =>
          import('./instructor-new-tickets/instructor-new-tickets.module').then(
            (m) => m.InstructorNewTicketsModule
          ),
      },
      {
        path: 'dashboard-instructor',
        loadChildren: () =>
          import('./dashboard-instructor/dashboard-instructor.module').then(
            (m) => m.DashboardInstructorModule
          ),
      },
    ],
  },
  {
    path: 'withdrawal-instructor',
    loadChildren: () =>
      import('./withdrawal-instructor/withdrawal-instructor.module').then(
        (m) => m.WithdrawalInstructorModule
      ),
  },
  {
    path: 'deposit-instructor',
    loadChildren: () =>
      import('./deposit-instructor/deposit-instructor.module').then(
        (m) => m.DepositInstructorModule
      ),
  },
  {
    path: 'transactions-instructor',
    loadChildren: () =>
      import('./transactions-instructor/transactions-instructor.module').then(
        (m) => m.TransactionsInstructorModule
      ),
  },
  { path: 'instructor-edit', loadChildren: () => import('./instructor-edit/instructor-edit.module').then(m => m.InstructorEditModule) },
  { path: 'instructor-expert-list', loadChildren: () => import('./instructor-student-list/instructor-student-list.module').then(m => m.InstructorStudentListModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorRoutingModule {}
