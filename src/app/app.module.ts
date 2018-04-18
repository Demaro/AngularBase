import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from '../app/static/dialog/add/add.component';
import { DeleteComponent } from './static/dialog/delete/delete.component';


import { FilterPipe } from '../app/static/services/filter.pipe';
import { AuthenticationService } from '../app/static/services/authentication.service';
import { ObjListComponent } from '../app/obj-list/obj-list.component';
import { EditComponent } from '../app/static/dialog/edit/edit.component';
import { LogginComponent } from './static/dialog/loggin/loggin.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBvY7-wdgb53s-c7TZ7puzykfq2XjxSK1w",
  authDomain: "ng5-experto-loggin.firebaseapp.com",
  databaseURL: "https://ng5-experto-loggin.firebaseio.com",
  projectId: "ng5-experto-loggin",
  storageBucket: "ng5-experto-loggin.appspot.com",
  messagingSenderId: "935157650757"

};

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    // features
    StaticModule,
    SettingsModule,




    // app
    AppRoutingModule
  ],
  declarations: [AppComponent, ObjListComponent, DeleteComponent, EditComponent, FilterPipe],
  providers: [AddComponent, AuthenticationService],
  bootstrap: [AppComponent],

  entryComponents: [
    AddComponent,
    DeleteComponent,
    EditComponent,
    LogginComponent
  ],
})
export class AppModule {}
