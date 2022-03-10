import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  errMsg=""
  msg = ''
  logMessage(value) {
    this.msg = value;
  }
}
