import { Component,OnInit} from '@angular/core';
import { NavigationEnd,Event, Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    constructor(private _httpService: HttpService,private _router:Router) {}
    ngOnInit() {}
}
