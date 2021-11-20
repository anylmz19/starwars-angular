import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  user: any;
  name: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/people/1/");
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
}
