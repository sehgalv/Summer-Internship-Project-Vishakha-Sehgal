import { Component, OnInit } from '@angular/core';
import { InvolvementService, Involvement } from './../services/involvement.service';

@Component({
  selector: 'app-involvement',
  templateUrl: './involvement.component.html',
  styleUrls: ['./involvement.component.css']
})
export class InvolvementComponent implements OnInit {
  allInvolvements: Involvement[];

  constructor(private involvementService: InvolvementService) { }

  ngOnInit() {
    this.allInvolvements = this.involvementService.getInvolvements();
  }
  
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
