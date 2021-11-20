import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-character4',
  templateUrl: './character4.component.html',
  styleUrls: ['./character4.component.css']
})
export class Character4Component implements OnInit {

  users: any;
  user: any;
  name: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/people/4/");
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
}
