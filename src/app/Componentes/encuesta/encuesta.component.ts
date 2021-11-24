import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Encuesta } from 'src/app/clases/encuesta';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  estado="1";
  encuesta: Encuesta;
  form: FormGroup;
  mail_usuario:string;
  
  constructor(private toastr: ToastrService, private fb:FormBuilder, private encSvc:DataService,public authFire: AngularFireAuth) { 

    this.authFire.authState.subscribe(res=>{
      if(res && res.uid){
        this.mail_usuario = res.email;
      }
    });


    this.encuesta = new Encuesta();
    this.encuesta.respuestaPuntuacion="1";
    this.encuesta.email = this.mail_usuario;

  }
  

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      apellido: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99), Validators.pattern('^[0-9]*$')]],
      telefono: ['',[Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]*$')]],
      conocer: ['',[Validators.required]],
      game: ['',[Validators.required]]
         });

}

isValid(field: string) {
  const validateField = this.form.get(field);
  let retorno = !validateField.valid && validateField.touched
  ? 'is-invalid'
  : validateField.touched
  ? 'is-valid'
  : '';
  return retorno;
}

Enviar(){
  this.encuesta.nombre=this.form.value.nombre;
  this.encuesta.apellido=this.form.value.apellido;
  this.encuesta.edad=this.form.value.edad;
  this.encuesta.telefono=this.form.value.telefono;
  this.encuesta.respuestaConocer=this.form.value.conocer;
  this.encuesta.email=this.mail_usuario;
  console.log(this.encuesta);
  this.encSvc.GuardarEncuesta(this.encuesta).then(() => {
    this.toastr.success("Encuesta guardada", "¡Gracias por tus comentarios!")
  })
  .catch(err => {
    this.toastr.error("Al guardar encuesta: " + err.message, "Error");
  })
  this.estado='2';

}

changeGame(e){
  this.encuesta.respuestaJuego = e.target.value;
}

radioButtonSelect(e){
 this.encuesta.respuestaPuntuacion = e.target.value; 
}

}


