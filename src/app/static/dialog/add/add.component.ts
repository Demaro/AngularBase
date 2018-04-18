import { Component, OnInit , Inject, OnChanges} from '@angular/core';

import { environment as env } from '@env/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {FormControl, Validators, NgForm} from '@angular/forms';

import { Employee } from '../../models/models';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'anms-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  status = [
    {value: '1', name: 'Abierto'},
    {value: '2', name: 'Pendiente'},
    {value: '3', name: 'En Proceso'},
    {value: '4', name: 'Resuelto'},
    {value: '5', name: 'Cerrado'}
  ];

  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    public employeeService: DataService,
  
    ) { }


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



  onNoClick(): void {
    this.dialogRef.close();
    }


    confirmAdd(form: NgForm, content) {
      if (form.value.id == null) {
      this.employeeService.postEmployee(form.value)
      .subscribe(data => {
      //this.resetForm(form);
      this.employeeService.getEmployeeList();
      //this.toastr.success('Nuevo registro agregado con éxito!',' Registro de empleados');
      
      })
      }

      }
    

}
