import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  servers;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.servers = this.dataService.getServers();
  }

  public serverFilter(newObj){
    console.log(newObj);
    if (newObj === ''){
      this.servers = this.dataService.getServers();
    } else {
      this.servers = this.dataService.getServers().filter(x => x.tags.some(y => y === newObj));
    }
  }

  public getServersByEnvironment(environmentName){
    return this.servers.filter(x => x.environment == environmentName);
  }
}
