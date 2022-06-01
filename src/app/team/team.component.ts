import { Component, OnInit } from '@angular/core';
import { faCoffee, faPooStorm } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  faCoffee = faPooStorm;
  showFounding: boolean = true;
  showTechnical = false;
  showRest = false;
  constructor() { }

  ngOnInit(): void {
  }

  showDialog(name: string): void {
    this.showFounding = false;
    this.showTechnical = false;
    this.showRest = false;
    if (name == 'founding') {
      this.showFounding = true;
    } else if (name == 'technical') {
      this.showTechnical = true;
    } else {
      this.showRest = true;
    }
  }

}
