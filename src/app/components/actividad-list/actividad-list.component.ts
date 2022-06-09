import { Component, HostBinding, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad';
import { ActividadesService } from '../../services/actividades.service';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css'],
})
export class ActividadListComponent implements OnInit {
  constructor(private actividadesService: ActividadesService) {}
  @HostBinding('class') classes = 'row';
  actividades: any = [];

  ngOnInit(): void {
    this.getActividades();
  }

  getActividades() {
    this.actividadesService.getActividades().subscribe((res) => {
      this.actividades = res;
    });
  }

  deleteActividad(id: number) {
    this.actividadesService.deleteActividad(id).subscribe(
      (res) => {
        console.log(res);
        this.getActividades();
      },
      (error) => console.log(error)
    );
  }
}
