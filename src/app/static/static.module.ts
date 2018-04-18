import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { FilterPipe } from '../static/services/filter.pipe';

import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule, MatCardModule, MatMenuModule,
  MatTableModule, MatToolbarModule, 
} from '@angular/material';

import {MatSelectModule} from '@angular/material/select';

import { Http, HttpModule, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { DataService } from '../static/services/data.service';
import { AddComponent } from '../static/dialog/add/add.component';
import { DeleteComponent } from '../static/dialog/delete/delete.component'
import { ObjListComponent } from '@app/obj-list/obj-list.component';
import { LogginComponent } from './dialog/loggin/loggin.component';


@NgModule({
  imports: [SharedModule, StaticRoutingModule, MatDialogModule, MatInputModule, MatButtonModule, MatSelectModule, HttpModule],
  declarations: [AboutComponent, FeaturesComponent, AddComponent, LogginComponent],
  providers: [ DataService , HttpModule]
})
export class StaticModule {}
