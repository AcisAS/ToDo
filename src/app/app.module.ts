import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ActividadFormComponent } from './components/actividad-form/actividad-form.component';
import { ActividadListComponent } from './components/actividad-list/actividad-list.component';
import { ActividadesService } from './services/actividades.service';

@NgModule({
  declarations: [
    AppComponent,
    ActividadComponent,
    ActividadFormComponent,
    ActividadListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ActividadesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
