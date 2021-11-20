import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-character9',
  templateUrl: './character9.component.html',
  styleUrls: ['./character9.component.css']
})
export class Character9Component implements OnInit {

    
  users: any;
  user: any;
  name: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/people/9/");
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
}
