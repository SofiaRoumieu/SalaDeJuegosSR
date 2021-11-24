import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { HomeComponent } from './page/home/home.component';
import { ErrorComponent } from './page/error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { JuegosComponent } from './Componentes/juegos/juegos.component';
import { ChatComponent } from './Componentes/chat/chat.component';
import { EncuestaComponent } from './Componentes/encuesta/encuesta.component';
import { ListadosComponent } from './Componentes/listados/listados.component';
import { ResultadosEncuestasComponent } from './Componentes/resultados-encuestas/resultados-encuestas.component';


const routes: Routes=[
  {path:'QuienSoy', component: QuienSoyComponent},
  {path:'Chat', component: ChatComponent},
  {path:'Login', component: LoginComponent},
  {path:'Encuesta', component:EncuestaComponent},
  {path:'Resultados', component:ResultadosEncuestasComponent},
  {path:'Listados', component:ListadosComponent},
  {path:'Registro', component:RegistroComponent},
  {path:'Home', component: HomeComponent},
  {path:'Juegos', component: JuegosComponent},
  {path:'Juegos',loadChildren: ()=>(import('./modules/juegos/juegos-routing.module').then(m => m.JuegosRoutingModule)),canActivate: [AuthGuard]},
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
