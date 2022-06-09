import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad';
import { ActividadesService } from '../../services/actividades.service';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css'],
})
export class ActividadListComponent implements OnInit {
  constructor(private actividadesService: ActividadesService) {}

  actividades: any = [];

  ngOnInit(): void {
    this.actividadesService.getActividades().subscribe((res) => {
      this.actividades = res;
    });
  }
}
