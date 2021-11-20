import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles13',
  templateUrl: './vehicles13.component.html',
  styleUrls: ['./vehicles13.component.css']
})
export class Vehicles13Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/species/13");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
