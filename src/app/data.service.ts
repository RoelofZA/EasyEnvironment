import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from './server';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  uri = 'http://localhost:4000/server';
  // servers = [
  //   {name: "DummyWnWeb01", environment: "dmz1", tags: ["capfin.co.za","fileupload"] },
  //   {name: "DummyWnWeb02", environment: "dmz1", tags: ["capfin.co.za","fileupload"] },
  //   {name: "DummyWnWeb01", environment: "dmz2", tags: ["ussd","platform api"] },
  //   {name: "DummyWnWeb02", environment: "dmz2", tags: ["ussd","platform api"] },
  //   {name: "DummyWndmzdb01", environment: "dmz3", tags: ["ussd","capfin.co.za","platform api"] },
  //   {name: "DummyWnappdev01", environment: "core", tags: ["ussd","capfin.co.za","platform api","fileupload", "captiv8"] },
  //   {name: "DummyWnappdev02", environment: "core", tags: ["ussd","capfin.co.za","platform api","fileupload", "captiv8"] },
  //   {name: "DummyWnapp01", environment: "core", tags: ["captiv8"] },
  //   {name: "DummyWnapp02", environment: "core", tags: ["captiv8"] },
  //   {name: "DummyWnapp03", environment: "core", tags: ["captiv8", "selfservice", "ussd"] },
  //   {name: "DummyWnapp04", environment: "core", tags: ["captiv8", "selfservice", "ussd"] }
  // ];
  servers: Server[] = [];
  constructor(private http: HttpClient) {
    // this.servers = [
    //       {name: "DummyWnWeb01", environment: "dmz1", tags: ["capfin.co.za","fileupload"] }
    //     ];
        this.http.get(`${this.uri}/`)
        .subscribe((data: Server[]) => {
          this.servers = data;
          console.log(data);
        });
  }

  public getServers() {
    return this.http.get(`${this.uri}/`);
  }

  public addServer(server_name, environment, ip_address, os, server_type, tags) {
    const obj = {
      server_name: server_name,
      environment: environment,
      ip_address: ip_address,
      os: os,
      server_type: server_type,
      tags: tags
    };
    return this
            .http
            .post(`${this.uri}/add`, obj);
  }

  public deleteServer(id) {
    return this
              .http
              .delete(`${this.uri}/delete/${id}`);
  }

  public editServer(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  public updateServer(server_name, environment, ip_address, os, server_type, tags, id) {
    console.log(id);
    const obj = {
        server_name: server_name,
        environment: environment,
        ip_address: ip_address,
        os: os,
        server_type: server_type,
        tags: tags
      };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj);
  }
}
