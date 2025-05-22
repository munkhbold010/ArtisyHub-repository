import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  isQuestion1Open = false;
  isQuestion2Open = false;
  isQuestion3Open = false;
  isQuestion4Open = false;
  isQuestion5Open = false;
  isQuestion6Open = false;

  toggleQuestion1() {
    this.isQuestion1Open = !this.isQuestion1Open;
  }

  toggleQuestion2() {
    this.isQuestion2Open = !this.isQuestion2Open;
  }

  toggleQuestion3() {
    this.isQuestion3Open = !this.isQuestion3Open;
  }
  toggleQuestion4() {
    this.isQuestion4Open = !this.isQuestion4Open;
  }
  toggleQuestion5() {
    this.isQuestion5Open = !this.isQuestion5Open;
  }
  toggleQuestion6() {
    this.isQuestion6Open = !this.isQuestion6Open;
  }

}
