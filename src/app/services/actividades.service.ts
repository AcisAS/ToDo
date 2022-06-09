import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getActividades() {
    return this.http.get(`${this.API_URI}/actividades`);
  }

  saveActividad(actividad:Actividad) {
    return this.http.post(`${this.API_URI}/crear-actividad`,actividad);

  }
}
