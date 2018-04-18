import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from '../static/dialog/add/add.component';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ObjListComponent } from '../../app/obj-list/obj-list.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { title: 'Inicio' } },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'Features' }
  },
  {
    path: 'crud',
    component: ObjListComponent,
    data: { title: 'Modulos' }
  },
  {
    path: 'add',
    component: AddComponent,
    data: { title: 'Add' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StaticRoutingModule {}
