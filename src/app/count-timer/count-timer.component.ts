import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.css'],
})
export class CountTimerComponent implements OnInit {
  interval;
  timeNumber = 0;
  // Time display
  public seconds: number = 0;
  public minutes: number = 0;
  public hours: number = 0;
  // Unit
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;
  disableStart = false;
  constructor() {}

  ngOnInit(): void {}
  startTimer() {
    this.disableStart = true;
    this.interval = setInterval(() => {
      this.timeNumber++;
      this.allocateTimeUnits(this.timeNumber);
    }, 1000);
  }
  allocateTimeUnits(timerNumber) {
    this.seconds = Math.floor(timerNumber % this.SecondsInAMinute);
    this.minutes = Math.floor(
      (timerNumber / this.minutesInAnHour) % this.minutesInAnHour
    );
    this.hours = Math.floor(
      (timerNumber / (this.minutesInAnHour * this.SecondsInAMinute)) %
        this.hoursInADay
    );
  }
  stopTimer() {
    this.disableStart = false;
    clearInterval(this.interval);
  }
}
