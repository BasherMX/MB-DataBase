import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/app.module';

@Component({
  selector: 'app-fechas-importantes',
  templateUrl: './fechas-importantes.component.html',
  styleUrls: ['./fechas-importantes.component.css']
})
export class FechasImportantesComponent implements OnInit {

  ArrayPersonasLocal: Persona[];

  //persona: Persona;

  constructor() {

    this.ArrayPersonasLocal = JSON.parse(
      localStorage.getItem('PersonasRegistradasMbDataBase') || '[]'
    );
  }

  ngOnInit(): void {
  }

}
