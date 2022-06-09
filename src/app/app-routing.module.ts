import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadListComponent } from './components/actividad-list/actividad-list.component';
import { ActividadFormComponent } from './components/actividad-form/actividad-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/actividades',
    pathMatch: 'full',
  },
  {
    path: 'actividades',
    component: ActividadListComponent,
  },
  {
    path: 'actividades/add',
    component: ActividadFormComponent,
  },
  {
    path: 'actividades/edit/:id',
    component: ActividadFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
