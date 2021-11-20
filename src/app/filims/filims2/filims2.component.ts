import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filims2',
  templateUrl: './filims2.component.html',
  styleUrls: ['./filims2.component.css']
})
export class Filims2Component implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/films/2/");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
