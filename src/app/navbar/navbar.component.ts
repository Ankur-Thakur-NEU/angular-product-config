import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';
import {
  faInstagram,
  faMedium,
  faReddit,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faTwitter = faTwitter;
  faGamepad = faGamepad;
  faTelegram = faTelegram;
  faReddit = faReddit;
  faMedium = faMedium;
  faInstagram = faInstagram;

  ngOnInit(): void {
  }

  colors: string[] = [
    '#b3478c',
    '#1e62c0',
    '#ffa764',
    '#3de68b',
    '#a11f2a',
    '#ffbf00',
  ];

  isAboutActive = false;
  isRoadmapActive = false;
  isFoundationActive = false;
  isNftActive = false;
  isTeamActive = false;
  isTokenActive = false;

  activateItem(pageName: string): void {
    this.isAboutActive = false;
    this.isRoadmapActive = false;
    this.isFoundationActive = false;
    this.isNftActive = false;
    this.isTeamActive = false;
    this.isTokenActive = false;

    switch (pageName) {
      case 'about':
        this.isAboutActive = true;
        break;
      case 'roadmap':
        this.isRoadmapActive = true;
        break;
      case 'foundation':
        this.isFoundationActive = true;
        break;
      case 'nft':
        this.isNftActive = true;
        break;
      case 'team':
        this.isTeamActive = true;
        break;
      case 'token': {
        this.isTokenActive = true;
        this.openDialog();
        break;
      }
    }
  }
  selectedColor = this.colors[0];

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
