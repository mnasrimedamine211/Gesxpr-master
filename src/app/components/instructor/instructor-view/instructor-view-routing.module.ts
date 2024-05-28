import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorViewComponent } from './instructor-view.component';

const routes: Routes = [{ path: '', component: InstructorViewComponent,
children:[
  {
    path: 'instructor-grid',
    loadChildren: () =>
      import('./instructor-grid/instructor-grid.module').then(
        (m) => m.InstructorGridModule
      ),
  },
  {
    path: 'instructor-list',
    loadChildren: () =>
      import('./instructor-list/instructor-list.module').then(
        (m) => m.InstructorListModule
      ),
  },
]
},
{ path: 'instructor-grid2', loadChildren: () => import('./instructor-grid2/instructor-grid2.module').then(m => m.InstructorGrid2Module) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorViewRoutingModule { }
