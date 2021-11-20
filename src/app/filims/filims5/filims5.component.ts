import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filims5',
  templateUrl: './filims5.component.html',
  styleUrls: ['./filims5.component.css']
})
export class Filims5Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/films/4/");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
