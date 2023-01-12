import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechasImportantesEditComponent } from './Fechas-Importantees/fechas-importantes-edit/fechas-importantes-edit.component';
import { FechasImportantesNewComponent } from './Fechas-Importantees/fechas-importantes-new/fechas-importantes-new.component';
import { FechasImportantesComponent } from './Fechas-Importantees/fechas-importantes/fechas-importantes.component';
import { HomeComponent } from './home/home.component';
import { ListarRegistrosComponent } from './listar-registros/listar-registros.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'listaRegistros', component: ListarRegistrosComponent},
  {path: 'fechasImportantes', component: FechasImportantesComponent},
  {path: 'fechasImportantes-new', component: FechasImportantesNewComponent},
  {path: 'fechasImportantes-edit/:id', component: FechasImportantesEditComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
