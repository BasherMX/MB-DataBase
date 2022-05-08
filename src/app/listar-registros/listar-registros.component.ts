import { Component, OnInit } from '@angular/core';
import { Persona } from '../app.module';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styleUrls: ['./listar-registros.component.css']
})
export class ListarRegistrosComponent implements OnInit {
  ArrayPersonasLocal: Persona[];

  constructor() {
    this.ArrayPersonasLocal = JSON.parse(
      localStorage.getItem('PersonasRegistradasMbDataBase') || '[]'
    );
  }

  ngOnInit(): void {
  }

}
