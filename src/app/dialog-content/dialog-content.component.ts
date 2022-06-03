import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  public log: string[] = [];
  public reactiveForm: FormGroup = new FormGroup({
    email:  new FormControl("", Validators.email),
    recaptchaReactive: new FormControl(null, Validators.required)
  });
  constructor(private dialogRef: MatDialogRef<DialogContentComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  getErrorMessage() {
    if (this.reactiveForm.controls["email"].hasError('required')) {
      return 'You must enter a value';
    }

    return this.reactiveForm.controls["email"].hasError('email') ? 'Not a valid email' : '';
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
