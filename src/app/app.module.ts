import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountTimerComponent } from './count-timer/count-timer.component';
import { MainTimeComponent } from './main-time/main-time.component';

@NgModule({
  declarations: [
    AppComponent,
    CountTimerComponent,
    MainTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
