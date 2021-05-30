import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
		path: 'home',
		component: HomeComponent
	},
  {
		path: 'empleados',
		component: EmpleadosComponent
	},
  {
		path: 'grupos',
		component: GruposComponent
	},
  {
		path: '**',
		redirectTo: 'home'
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
