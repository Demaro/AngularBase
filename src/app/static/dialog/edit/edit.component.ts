import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'anms-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  selected = 'Cerrado';

  status = [
    {value: '1', name: 'Abierto'},
    {value: '2', name: 'Pendiente'},
    {value: '3', name: 'En Proceso'},
    {value: '4', name: 'Resuelto'},
    {value: '5', name: 'Cerrado'}
  ];

  constructor(public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

formControl = new FormControl('', [
Validators.required,
Validators.email
]);

getErrorMessage() {
return this.formControl.hasError('required') ? 'Campo Requerdio' :
this.formControl.hasError('email') ? 'Not a valid email' :
'';
}

submit() {
// emppty stuff
}

onNoClick(): void {
this.dialogRef.close();
}

stopEdit(id, form: NgForm): void {
this.dialogRef.close();
this.dataService.putEmployee(id, form.value)
.subscribe(data => {
//this.resetForm(form);
this.dataService.getEmployeeList();
//this.toastr.info('Registro Actualizado!');

})
}


}
