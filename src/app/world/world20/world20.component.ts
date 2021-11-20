import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-world20',
  templateUrl: './world20.component.html',
  styleUrls: ['./world20.component.css']
})
export class World20Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/planets/20/");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
