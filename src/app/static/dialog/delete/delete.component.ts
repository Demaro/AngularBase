import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service'



@Component({
  selector: 'anms-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService
  ) { }

onNoClick(): void {
this.dialogRef.close();
}


confirmDelete(id: number) {
  this.dialogRef.close();
  this.dataService.deleteEmployee(id)
  .subscribe(x => {
  this.dataService.getEmployeeList();
  //this.toastr.warning("Eliminado con éxito");
})

}



}
