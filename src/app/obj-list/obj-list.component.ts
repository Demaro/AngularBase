import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

import { environment as env } from '@env/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { Employee, User } from '../static/models/models';
import { MatDialog } from '@angular/material';
import { AddComponent } from '../static/dialog/add/add.component';
import { DataService } from '../static/services/data.service';
import { Routes, RouterModule } from '@angular/router';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { DeleteComponent } from '../static/dialog/delete/delete.component';
import { EditComponent } from '../static/dialog/edit/edit.component'
import { AuthenticationService } from '../static/services/authentication.service';

@Component({
  selector: 'anms-obj-list',
  templateUrl: './obj-list.component.html',
  styleUrls: ['./obj-list.component.scss'],
  
  
})
export class ObjListComponent implements OnInit {


  selected = 'Cerrado';
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  index: number;
  id: number;
  data = this.dataService.employeeList; 


  constructor( public dialog: MatDialog,
    public dataService: DataService, public af: AuthenticationService
) {}


  ngOnInit() {
    this.dataService.getEmployeeList();
  }

  ngOnChanges() {
    this.dataService.getEmployeeList();
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  addNew(emp: Employee) {
    const dialogRef = this.dialog.open(AddComponent, {
      data: {emp: emp }
      
      
    });

  }


  showForEdit(i: number, id: number, name: string, description: string, status: string,  ) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(id);
    const dialogRef = this.dialog.open(EditComponent, {
      data: {id: id, name: name, description: description, status: status, }
    });

  }

deleteItem(i: number, id: number, name: string, user: string, status: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {id: id, name: name, user: user, status: status, }
    });
}

}
