import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filims4',
  templateUrl: './filims4.component.html',
  styleUrls: ['./filims4.component.css']
})
export class Filims4Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/films/3/");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
