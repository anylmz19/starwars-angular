import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-character6',
  templateUrl: './character6.component.html',
  styleUrls: ['./character6.component.css']
})
export class Character6Component implements OnInit {

  users: any;
  user: any;
  name: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/people/6/");
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
}
