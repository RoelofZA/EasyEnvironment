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
      environment_name: ['', Validators.required ],
      tags: ['', Validators.required ]
    });
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.ds.editServer(params['id']).subscribe(res => {
          this.server = res;
        });
      });
  }

  updateServer(server_name, environment_name, tags) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.ds.updateServer(server_name, environment_name, tags, params['id']);
      this.router.navigate(['server/list']);
    });
  }

}
