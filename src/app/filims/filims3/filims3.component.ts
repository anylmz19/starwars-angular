import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filims3',
  templateUrl: './filims3.component.html',
  styleUrls: ['./filims3.component.css']
})
export class Filims3Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/films/3/");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
