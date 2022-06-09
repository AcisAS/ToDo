import { Component, HostBinding, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad';
import { ActividadesService } from '../../services/actividades.service';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.css'],
})
export class ActividadFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  actividad: Actividad = {
    actividad: '',
    fecha: new Date(),
    idusuario: 1,
  };

  constructor(private actividadesService: ActividadesService) {}

  ngOnInit(): void {}
  saveActividad() {
    this.actividadesService.saveActividad(this.actividad).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => console.log(error)
    );
  }
}
