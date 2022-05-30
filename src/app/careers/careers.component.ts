import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  typesOfJobs: string[] = ['Web 3 Developer', 'Marketing Intern', 'Community Manager'];

  constructor() { }

  ngOnInit(): void {
  }

}
