import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles38',
  templateUrl: './vehicles38.component.html',
  styleUrls: ['./vehicles38.component.css']
})
export class Vehicles38Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/species/38");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
