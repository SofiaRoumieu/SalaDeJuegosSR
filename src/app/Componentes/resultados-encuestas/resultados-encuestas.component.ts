import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-resultados-encuestas',
  templateUrl: './resultados-encuestas.component.html',
  styleUrls: ['./resultados-encuestas.component.css']
})

export class ResultadosEncuestasComponent implements OnInit {

  listado:any;
  constructor(private dataSrv:DataService) { }

  ngOnInit(): void {
    this.dataSrv.getEncuestas().subscribe((res)=>{
      console.log(res);
      this.listado = res;
      console.log(this.listado);
    });
  }

  ConsultarPuntos(juego:string){
    console.log(juego);
    this.dataSrv.getEncuestas().subscribe((res)=>{
      console.log(res);
      this.listado = res;
      console.log(this.listado);
    });
  }

}
