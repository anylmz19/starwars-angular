import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-character5',
  templateUrl: './character5.component.html',
  styleUrls: ['./character5.component.css']
})
export class Character5Component implements OnInit {

  users: any;
  user: any;
  name: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/people/5/");
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
}
