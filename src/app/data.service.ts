import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  servers = [
    {name: "DummyWnWeb01", environment: "dmz1", tags: ["capfin.co.za","fileupload"] },
    {name: "DummyWnWeb02", environment: "dmz1", tags: ["capfin.co.za","fileupload"] },
    {name: "DummyWnWeb01", environment: "dmz2", tags: ["ussd","platform api"] },
    {name: "DummyWnWeb02", environment: "dmz2", tags: ["ussd","platform api"] },
    {name: "DummyWndmzdb01", environment: "dmz3", tags: ["ussd","capfin.co.za","platform api"] },
    {name: "DummyWnappdev01", environment: "core", tags: ["ussd","capfin.co.za","platform api","fileupload", "captiv8"] },
    {name: "DummyWnappdev02", environment: "core", tags: ["ussd","capfin.co.za","platform api","fileupload", "captiv8"] },
    {name: "DummyWnapp01", environment: "core", tags: ["captiv8"] },
    {name: "DummyWnapp02", environment: "core", tags: ["captiv8"] },
    {name: "DummyWnapp03", environment: "core", tags: ["captiv8", "selfservice", "ussd"] },
    {name: "DummyWnapp04", environment: "core", tags: ["captiv8", "selfservice", "ussd"] }
  ];
  constructor() { }

  public getServers():Array<{name, environment, tags}>{
    return this.servers;
  }
}
