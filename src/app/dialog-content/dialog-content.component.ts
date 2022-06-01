import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  public log: string[] = [];
  public reactiveForm: FormGroup = new FormGroup({
    recaptchaReactive: new FormControl(null, Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  public addTokenLog(message: string, token: string | null) {
    this.log.push(`${message}: ${this.formatToken(token)}`);
  }

  public formatToken(token: string | null) {
    return token !== null
      ? `${token.substr(0, 7)}...${token.substr(-7)}`
      : 'null';
  }
}
