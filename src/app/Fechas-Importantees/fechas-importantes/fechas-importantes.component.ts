import { Component, OnInit } from '@angular/core';
import { FechaImportante } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fechas-importantes',
  templateUrl: './fechas-importantes.component.html',
  styleUrls: ['./fechas-importantes.component.css']
})
export class FechasImportantesComponent implements OnInit {

  ArrayFechasImportantes: FechaImportante[];

  //persona: Persona;

  constructor() {

    this.ArrayFechasImportantes = JSON.parse(
      localStorage.getItem('FechasImportantesMB_Site') || '[]'
    );
  }

  ngOnInit(): void {
  }

  fnDelete(celebracion: string){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás recuperar este elemento una vez eliminado!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.value) {
        const index = this.ArrayFechasImportantes.findIndex((fecha) => fecha.celebracion === celebracion);
        this.ArrayFechasImportantes.splice(index, 1);

        localStorage.setItem(
          'FechasImportantesMB_Site',
          JSON.stringify(this.ArrayFechasImportantes)
        );
      }
    });
  }
}
