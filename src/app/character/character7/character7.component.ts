import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-character7',
  templateUrl: './character7.component.html',
  styleUrls: ['./character7.component.css']
})
export class Character7Component implements OnInit {

  users: any;
  user: any;
  name: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/people/7/");
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
}
