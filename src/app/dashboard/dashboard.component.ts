import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Server } from '../server';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  servers: any;
  servers_clean: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getServers()
     .subscribe(data => {
       this.servers = data;
       this.servers_clean = data;
     });
  }

  public serverFilter(newObj) {
    if (newObj === '') {
       this.servers = this.servers_clean;
     } else {
       this.servers = this.servers_clean.filter(x => x.tags.some(y => y === newObj));
     }
  }

  public getServersByEnvironment(environmentName) {
    if (this.servers_clean == null) {
      return [];
    }
    return this.servers.filter(x => x.environment === environmentName);
  }
}
