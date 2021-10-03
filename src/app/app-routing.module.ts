import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './page/error/error.component';


const routes: Routes=[
  {path:'QuienSoy', component: QuienSoyComponent},
  {path:'Login', component: LoginComponent},
  {path:'Registro', component:RegistroComponent},
  {path:'Home', component: HomeComponent},
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
