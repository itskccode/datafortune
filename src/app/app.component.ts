import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Datafortune';
  constructor() { }
  ngOnInit(): void {
    // this.route.data.subscribe((data)=>{
    //   debugger;
    // });
  }
}
