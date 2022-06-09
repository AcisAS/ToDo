import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadListComponent } from './components/actividad-list/actividad-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/actividades',
    pathMatch:'full'
  },
  {
    path: 'actividades',
    component: ActividadListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
