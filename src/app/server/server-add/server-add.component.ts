import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css']
})
export class ServerAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ds: DataService) {
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
  }

  addServer(server_name, environment_name, tags) {
    this.ds.addServer(server_name,environment_name, tags);
    this.angForm.reset();
  }

}
