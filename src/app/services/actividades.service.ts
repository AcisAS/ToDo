import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/actividad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getActividades() {
    return this.http.get(`${this.API_URI}/actividades`);
  }

  getActividad(id: number) {
    return this.http.get<Actividad[]>(`${this.API_URI}/actividades/${id}`);
  }

  saveActividad(actividad: Actividad) {
    return this.http.post(`${this.API_URI}/crear-actividad`, actividad);
  }

  deleteActividad(id: number) {
    return this.http.delete(`${this.API_URI}/eliminar-actividad/${id}`);
  }

  updateActividad(id: string|number, actividad: Actividad): Observable<Actividad> {
    return this.http.put(`${this.API_URI}/actualizar-actividad/${id}`, actividad);
  }
}
