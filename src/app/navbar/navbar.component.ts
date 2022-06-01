import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  

  ngOnInit(): void {
  }

  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
  
  selectedColor = this.colors[0];

  constructor(private loc: Location, private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => {
      console.log(e);

      // this is fix for dynamic generated(loaded..?) content
      setTimeout(() => {
        if (e.position) {
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
    });
  }

  locationBack() {
    window.history.back();
  }

  locationBackAngular() {
    this.loc.back();
  }
}
