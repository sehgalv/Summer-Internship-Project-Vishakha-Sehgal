import { Component, OnInit } from '@angular/core';
import { AcademicsService, Academics, Work} from './../services/academics.service';
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {
  allSchools : Academics[];
  workExperiences : Work[];

  constructor(private academicsService:AcademicsService) { }

  ngOnInit() {
    this.allSchools = this.academicsService.getAcademics();
    this.workExperiences = this.academicsService.getWork();
    console.log(this.allSchools);
    console.log(this.workExperiences);
  }

}
