import { Component, OnInit } from '@angular/core';
import { faCoffee, faPooStorm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  faCoffee = faPooStorm;
  constructor() { }

  ngOnInit(): void {
  }

}
