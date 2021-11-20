import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-character3',
  templateUrl: './character3.component.html',
  styleUrls: ['./character3.component.css']
})
export class Character3Component implements OnInit {

  users: any;
  user: any;
  name: string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp= this.http.get("https://swapi.dev/api/people/3/");
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
}
