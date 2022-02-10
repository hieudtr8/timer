import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountTimerComponent } from './count-timer/count-timer.component';
import { MainTimeComponent } from './main-time/main-time.component';

const routes: Routes = [
  { path: '', component: MainTimeComponent },
  { path: 'count-timer', component: CountTimerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
