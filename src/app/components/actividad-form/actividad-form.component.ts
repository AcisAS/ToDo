import { Component, HostBinding, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad';
import { ActividadesService } from '../../services/actividades.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.css'],
})
export class ActividadFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  actividad: Actividad = {
    idactividad: 0,
    actividad: '',
    fecha: new Date(),
    idusuario: 1,
  };
  edit: boolean = false;

  constructor(
    private actividadesService: ActividadesService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;

    if (params['id']) {
      this.actividadesService.getActividad(params['id']).subscribe(
        (res) => {
          this.actividad = res[0];
          this.edit = true;
        },
        (error) => console.log(error)
      );
    }
  }

  saveActividad() {
    this.actividadesService.saveActividad(this.actividad).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['actividades']);
      },
      (error) => console.log(error)
    );
  }

  updateActividad() {
    this.actividadesService
      .updateActividad(this.actividad.idactividad || '', this.actividad)
      .subscribe(
        (res) => {
          console.log(res);
          this.route.navigate(['actividades']);
        },
        (error) => console.log(error)
      );
  }
}
