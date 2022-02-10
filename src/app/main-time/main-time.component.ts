import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-main-time',
  templateUrl: './main-time.component.html',
  styleUrls: ['./main-time.component.css'],
})
export class MainTimeComponent implements OnInit {
  dateTime: Observable<Date>;
  constructor() {}

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date();
      })
    );
  }
}
