import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from 'src/app/Componentes/ahorcado/ahorcado.component';
import { SimonDiceComponent } from 'src/app/Componentes/simon-dice/simon-dice.component';
import { MayoOMenorComponent } from 'src/app/Componentes/mayo-omenor/mayo-omenor.component';
import { PreguntadosComponent } from 'src/app/Componentes/preguntados/preguntados.component';

const routes: Routes = [
  {path:'MayorOMenor',component:MayoOMenorComponent},
  {path:'Ahorcado',component:AhorcadoComponent},
  {path:'Preguntados',component:PreguntadosComponent},
  {path:'SimonDice',component:SimonDiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }