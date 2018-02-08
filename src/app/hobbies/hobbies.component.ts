import { Component, OnInit } from '@angular/core';
import { HobbiesService, Hobby} from './../services/hobbies.service'
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  allHobbies: Hobby[];

  constructor(private involvementService: HobbiesService) { }
  panelOpenState: boolean = false;

  ngOnInit() {
    this.allHobbies = this.involvementService.getHobbies();
    console.log(this.allHobbies);
  }

}
