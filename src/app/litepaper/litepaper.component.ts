import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-litepaper',
  templateUrl: './litepaper.component.html',
  styleUrls: ['./litepaper.component.scss']
})
export class LitepaperComponent implements OnInit {

  constructor(private sanitized: DomSanitizer) { }

  ngOnInit(): void {
    this.setInnerHtml('assets/ACRE-Litepaper-v1.0.pdf');
  }

public innerHtml: SafeHtml = '';
public setInnerHtml(pdfurl: string) {
    this.innerHtml = this.sanitized.bypassSecurityTrustHtml(
        "<embed src='" + pdfurl + "#page=1&zoom=100' type='application/pdf' width='100%' height='100%' class='embed-responsive-item'>" +
        "</embed>");
}
}
