import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-character8',
  templateUrl: './character8.component.html',
  styleUrls: ['./character8.component.css']
})
export class Character8Component implements OnInit {

  
  users: any;
  user: any;
  name: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/people/8/");
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
}
