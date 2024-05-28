import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view.component';

const routes: Routes = [
  { path: '', component: StudentViewComponent,
children:[
  {
    path: 'students-list',
    loadChildren: () =>
      import('./students-list/students-list.module').then(
        (m) => m.StudentsListModule
      ),
  },
  {
    path: 'students-grid',
    loadChildren: () =>
      import('./students-grid/students-grid.module').then(
        (m) => m.StudentsGridModule
      ),
  },
]
},
  { path: 'students-grid2', loadChildren: () => import('./students-grid2/students-grid2.module').then(m => m.StudentsGrid2Module) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentViewRoutingModule {}
