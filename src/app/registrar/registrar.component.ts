import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Persona } from '../app.module';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  RegistrarPersona: Persona;
  ArrayPersonas: Persona[];

  constructor() { 
    //guarda en el local
    this.ArrayPersonas = JSON.parse(
      localStorage.getItem('PersonasRegistradasMbDataBase') || '[]'
    );
    
    //inicializa 1 persona
    this.RegistrarPersona = {
      distrito: 0,
      seccion: 0,
      manzana:0,
      ap_pat:"",
      ap_mat:"",
      nombres:"",
      calle:"",
      colonia:"",
      n_exterior:"",
      n_interior:"",
      telefono:"",
      redes:"",
      auditoria:""
    }


  }

  ngOnInit(): void {
  }


  formularioEnviado() {
    if (
      this.RegistrarPersona.distrito !=  0,
      this.RegistrarPersona.seccion !=  0,
      this.RegistrarPersona.manzana != 0,
      this.RegistrarPersona.ap_pat != "",
      this.RegistrarPersona.ap_mat != "",
      this.RegistrarPersona.nombres != "",
      this.RegistrarPersona.calle != "",
      this.RegistrarPersona.colonia != "",
      this.RegistrarPersona.n_exterior != "",
      this.RegistrarPersona.n_interior != "",
      this.RegistrarPersona.telefono != "",
      this.RegistrarPersona.redes != ""
    ) {
      //nuevo registro
      Swal.fire({
        title: 'Persona registrada con exito',
        icon: 'success',
        confirmButtonText: 'cerrar',
        timerProgressBar: true,
        timer: 2200,
      });
      this.ArrayPersonas.push(this.RegistrarPersona); //agrega al array
      localStorage.setItem(
        'PersonasRegistradasMbDataBase',
        JSON.stringify(this.ArrayPersonas)
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
    this.RegistrarPersona={
      distrito: 0,
      seccion: 0,
      manzana:0,
      ap_pat:"",
      ap_mat:"",
      nombres:"",
      calle:"",
      colonia:"",
      n_exterior:"",
      n_interior:"",
      telefono:"",
      redes:"",
      auditoria:""
    }
  }

}
