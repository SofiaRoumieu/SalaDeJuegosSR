import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth:AuthService, private toast:ToastrService,private route:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user;
       
      return this.auth.getUserEmail().then(res => {
        user = res;
        
        if(user != 0 && user!=undefined)
        { 
          console.info(user);
          this.auth.getUserByMail(user).then(res =>{
            if(res.length > 0)
            { 
              if(res[0].perfil==="admin"){
                  console.log("es adminnn");
                  return true;
              }
              else{
                console.log("no es admin :(");
                this.toast.error("Necesitás ser Admin para ingresar a esta ruta","Error");
                this.route.navigate(['/Login']);
                return false;
              }
              
            }
          });
        }
        else
        {  
          return false;
        }
        return true;
    })
  }
}
