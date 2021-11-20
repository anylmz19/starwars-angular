import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles2',
  templateUrl: './vehicles2.component.html',
  styleUrls: ['./vehicles2.component.css']
})
export class Vehicles2Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/species/2");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
