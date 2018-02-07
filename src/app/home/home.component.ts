import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullImagePath : string;
  whereIamFrom : string
  
  constructor() {
    this.fullImagePath = '/assets/images/vishakha_home.jpg';
    this.whereIamFrom = 'Born in New Delhi, India, I moved to the US at the age of 3.'
   }

  ngOnInit() {
  }

}
