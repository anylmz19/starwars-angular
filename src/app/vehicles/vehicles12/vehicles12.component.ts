import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles12',
  templateUrl: './vehicles12.component.html',
  styleUrls: ['./vehicles12.component.css']
})
export class Vehicles12Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/species/12");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
