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

  ngOnInit(): void {}

  colors: string[] = [
    '#b3478c',
    '#1e62c0',
    '#ffa764',
    '#3de68b',
    '#a11f2a',
    '#ffbf00',
  ];

  selectedColor = this.colors[0];

  constructor() {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
