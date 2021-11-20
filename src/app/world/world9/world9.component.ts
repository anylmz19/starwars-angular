import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-world9',
  templateUrl: './world9.component.html',
  styleUrls: ['./world9.component.css']
})
export class World9Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/planets/9/");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
