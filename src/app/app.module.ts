import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ServerAddComponent } from './server/server-add/server-add.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServerListComponent } from './server/server-list/server-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServerAddComponent,
    ServerEditComponent,
    ServerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
