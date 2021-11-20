import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vehicles30',
  templateUrl: './vehicles30.component.html',
  styleUrls: ['./vehicles30.component.css']
})
export class Vehicles30Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/species/30");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
