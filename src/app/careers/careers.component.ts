import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  typesOfJobs: any[] = [
    { name: 'Web 3 Developer', type: "Development", location: "Remote, Boston" },
    { name: 'Marketing Intern', type: "Marketing", location: "Boston" },
    { name: 'Community Manager', type: "Community Management", location: "Boston" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
