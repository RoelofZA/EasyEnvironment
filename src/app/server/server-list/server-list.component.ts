import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  servers;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getServers()
     .subscribe(data => {
       this.servers = data;
     });
  }

  public deleteServer(id) {
    console.log(id);
    this.dataService.deleteServer(id)
    .subscribe(data => {
      this.dataService.getServers()
       .subscribe(serverData => {
         this.servers = serverData;
       });
    });
  }

}
