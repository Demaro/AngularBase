import { Component, OnInit, Inject } from '@angular/core';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { User } from '../models/models';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  

  constructor(
    ) { }

    pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";


  formControl = new FormControl('', [
    Validators.required,
    Validators.email,

    Validators.pattern(this.pwdPattern),

    
    ]);

    getErrorMessage() {
      return this.formControl.hasError('required') ? 'Campo Requerido' :
      '';
      }
      
      getErrorMessage_email() {
      return this.formControl.hasError('email') ? 'Ingrese un Email Valido' :
      '';  
      }

      getErrorMessage_pass() {
        return this.formControl.hasError('password') ? 'Ingrese contraseña Valida' :
        '';
  
        
        }

  

  ngOnInit() {}
}
