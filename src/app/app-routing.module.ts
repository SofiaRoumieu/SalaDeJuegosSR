import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { HomeComponent } from './Componentes/home/home.component';


const routes: Routes=[
  {path:'QuienSoy', component: QuienSoyComponent},
  {path:'Login', component: LoginComponent},
  {path:'Registro', component:RegistroComponent},
  {path:'Home', component: HomeComponent},
  {path:'', redirectTo:'Home', pathMatch:'full'}
  //{path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
