import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ShowLateralBar =  true;


  fnocultarBarraLateral(){
    this.ShowLateralBar = !this.ShowLateralBar;
  }

  

}
