import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit {
  angForm: FormGroup;
  server: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private ds: DataService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      server_name: ['', Validators.required ],
      server_type: ['', Validators.required ],
      os: ['', Validators.required ],
      ip_address: ['', Validators.required ],
      environment_name: ['', Validators.required ],
      tags: ['', Validators.required ]
    });
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.ds.editServer(params['id']).subscribe(res => {
          this.server = res;
          this.angForm.get('ip_address').setValue(this.server.ip_address);
          this.angForm.get('environment_name').setValue(this.server.environment);
          this.angForm.get('os').setValue(this.server.os);
          this.angForm.get('server_type').setValue(this.server.server_type);
          this.angForm.get('server_name').setValue(this.server.server_name);
          this.angForm.get('tags').setValue(this.server.tags);
        });
      });
  }

  updateServer(server_name, environment_name, ip_address, os, server_type, tags) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.ds.updateServer(server_name, environment_name, ip_address, os, server_type, tags, params['id']).subscribe(res => 
        this.router.navigate(['server/list'])
        );
    });
  }

}
