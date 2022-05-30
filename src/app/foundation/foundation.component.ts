import { Component, OnInit } from '@angular/core';
import { faChain, faChild, faPooStorm, faTree } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.scss']
})
export class FoundationComponent implements OnInit {
  faTree = faTree;
  faChild = faChild;
  faChain = faChain;
  faPooStorm = faPooStorm;
  constructor() { }

  ngOnInit(): void {
  }

}
