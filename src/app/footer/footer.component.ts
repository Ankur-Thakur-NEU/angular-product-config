import { Component, OnInit } from '@angular/core';
import { faInstagram, faMedium, faReddit, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faGamepad = faGamepad;
  faTelegram = faTelegram;
  faReddit = faReddit;
  faMedium = faMedium;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
