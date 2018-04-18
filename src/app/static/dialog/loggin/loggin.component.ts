import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service'
import {FormControl, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/models';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'anms-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent  {

  constructor(public dialogRef: MatDialogRef<LogginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, public dataService: DataService, public router: Router, public authentication: AuthenticationService) { }

    formControl = new FormControl('', [
      Validators.required,
      Validators.email
      ]);

      getErrorMessage() {
        return this.formControl.hasError('required') ? 'Campo Requerido' :
        '';
        }
        
        getErrorMessage_email() {
        return this.formControl.hasError('email') ? 'Ingrese un Email Valido' :
        '';
        }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
    }

  loggin(form: NgForm, content) {
    this.dialogRef.close();

    this.dataService.postLoggin(form.value)
    
   
    .subscribe(data => {
      //this.resetForm(form);
      this.dataService.getUser(data.email);
      
      //this.toastr.success('Nuevo registro agregado con éxito!',' Registro de empleados');
      
      })
  }


  onLoginGoogle() {
    this.dialogRef.close();
    this.authentication.login()

      .then((data)=>{
        console.log(data.additionalUserInfo.profile.given_name);
        console.log(data);
        this.authentication.authenticated = true;
        this.authentication.user_name = data.additionalUserInfo.profile.given_name;
        console.log(this.authentication.user_name);

       

      })
      
      .catch((error)=>{
        console.log(error);
        alert('loged Error!');
      })
  }


}
