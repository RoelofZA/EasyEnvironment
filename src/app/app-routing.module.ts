import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServerAddComponent } from './server/server-add/server-add.component';
import { ServerListComponent } from './server/server-list/server-list.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'server/add',
    component: ServerAddComponent
  },
  {
    path: 'server/edit/:id',
    component: ServerEditComponent
  },
  {
    path: 'server/list',
    component: ServerListComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
