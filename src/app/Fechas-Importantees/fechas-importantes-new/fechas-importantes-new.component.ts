import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FechaImportante } from 'src/app/app.module';

@Component({
  selector: 'app-fechas-importantes-new',
  templateUrl: './fechas-importantes-new.component.html',
  styleUrls: ['./fechas-importantes-new.component.css']
})
export class FechasImportantesNewComponent implements OnInit {
  RegistrarFecha: FechaImportante;
  ArrayFechasImportantes: FechaImportante[];

  constructor() { 
    //guarda en el local
    this.ArrayFechasImportantes = JSON.parse(
      localStorage.getItem('FechasImportantesMB_Site') || '[]'
    );
    
    //inicializa 1 persona
    this.RegistrarFecha = {
      id:0,
      celebracion: "",
      dia: 0,
      mes:"",
      tipo:"Elegir..."
    }
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
      this.RegistrarFecha.celebracion =this.RegistrarFecha.celebracion.toUpperCase();

      this.ArrayFechasImportantes.push(this.RegistrarFecha); //agrega al array

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
