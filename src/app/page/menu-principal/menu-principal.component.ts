import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  estado_activo:boolean;
  mail_usuario?:string; 
  user:any;
  constructor(private authSv: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.authSv.isLoggedIn().subscribe(
      data => {
        this.user = data;
        if(this.user){
          this.estado_activo = true;
          this.mail_usuario='sofia@sofia';
        }
        else{ this.estado_activo = false;
          this.mail_usuario='';
        }

      },
      err => console.log(err)
    );
  }

  async cerrarSesion(){
    try {
      await this.authSv.logout();
      this.estado_activo = false;
    } catch (error) {
      console.log("Error al cerrar sesion" + error);
    }
  } 


}
