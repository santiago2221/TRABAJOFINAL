import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm : FormGroup;
loading = false;

constructor(private fb : FormBuilder, private router: Router){
this.myForm= this.fb.group({
  usuario: ['', Validators.required],
  password: ['', Validators.required]

})
}
ngOnInit(): void {
  
}
ingresar(){
 
  const usuario = this.myForm.value.usuario;
  const password = this.myForm.value.password;
    if (usuario == 'SeñorGato' && password == '123'){
      this.midloding();
    }else{
      this.errorr();
      this.myForm.reset();
    }
    
}

errorr(){
  alert ( "usuario o contraseña invalido");
  
}
midloding(){
  this.loading = true;

  setTimeout(() => {

    this.router.navigate(['dashboards']);
  }, 1000);
}

}
