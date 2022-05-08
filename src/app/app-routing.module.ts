import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarRegistrosComponent } from './listar-registros/listar-registros.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'listaRegistros', component: ListarRegistrosComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
