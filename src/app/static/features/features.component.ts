import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';

import { environment as env } from '@env/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { Employee } from '../models/models';
import { MatDialog } from '@angular/material';
import { AddComponent } from '../dialog/add/add.component';
import { DataService } from '../services/data.service';
import { Routes, RouterModule } from '@angular/router';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'anms-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FeaturesComponent implements OnInit, OnChanges {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  versions = env.versions;
  index: number;
  id: number;


  constructor( public dialog: MatDialog,
    public dataService: DataService,
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

/*
  showForEdit(i: number, id: number, firstName: string, lastName: string, email: string, mobileNumber: number ) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(id);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {id: id, firstName: firstName, lastName: lastName, email: email, mobileNumber: mobileNumber }
    });

  }


  deleteItem(i: number, id: number, firstName: string, lastName: string, email: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {id: id, firstName: firstName, lastName: lastName, email: email}
    });

    */

}



