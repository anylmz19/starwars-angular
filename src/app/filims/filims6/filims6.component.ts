import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-filims6',
  templateUrl: './filims6.component.html',
  styleUrls: ['./filims6.component.css']
})
export class Filims6Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/films/4/");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
