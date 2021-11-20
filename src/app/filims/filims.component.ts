import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filims',
  templateUrl: './filims.component.html',
  styleUrls: ['./filims.component.css']
})
export class FilimsComponent implements OnInit {

  constructor(private http:HttpClient) { }
    
  users: any;
  user: any;
  name: any;

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/films/1/");
    resp.subscribe((data)=>this.user=data);
  }
  
  
}
