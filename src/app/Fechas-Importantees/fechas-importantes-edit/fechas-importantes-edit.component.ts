import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FechaImportante } from 'src/app/app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fechas-importantes-edit',
  templateUrl: './fechas-importantes-edit.component.html',
  styleUrls: ['./fechas-importantes-edit.component.css']
})
export class FechasImportantesEditComponent implements OnInit {
  celebrationEdit: string | null;
  
  RegistrarFecha: FechaImportante;
  ArrayFechasImportantes: FechaImportante[];

  constructor(private route: ActivatedRoute) { 
    this.celebrationEdit = this.route.snapshot.paramMap.get('id');

    //guarda en el local
    this.ArrayFechasImportantes = JSON.parse(
      localStorage.getItem('FechasImportantesMB_Site') || '[]'
    );
    this.RegistrarFecha = this.ArrayFechasImportantes.find(objeto => objeto.celebracion === this.celebrationEdit) || new FechaImportante(0,"",0,"","Elegir...");

  }

  ngOnInit(): void {
  }


  formularioEnviado() {
    if ( this.RegistrarFecha.celebracion !=  "" || this.RegistrarFecha.dia !=  0 || this.RegistrarFecha.mes != "" ){

      //nuevo registro
      Swal.fire({
        title: 'Fecha registrada con exito',
        icon: 'success',
        confirmButtonText: 'cerrar',
        timerProgressBar: true,
        timer: 1200,
      });

      let index = this.ArrayFechasImportantes.findIndex(x => x.celebracion === this.celebrationEdit);

      this.ArrayFechasImportantes[index] = this.RegistrarFecha;

      localStorage.setItem(
        'FechasImportantesMB_Site',
        JSON.stringify(this.ArrayFechasImportantes)
      ); //guarda en el local

    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Existen campos vacios',
        icon: 'error',
        confirmButtonText: 'cerrar',
        timerProgressBar: true,
        timer: 1900,
      });
    }

    this.reiniciarFormulario();


  }

  reiniciarFormulario() {
    //limpiar el formulario
    this.RegistrarFecha={
      id:0,
      celebracion: "",
      dia: 0,
      mes:"",
      tipo:"Elegir..."
    }
  }

}
