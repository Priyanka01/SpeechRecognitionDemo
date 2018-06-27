import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechsynComponent } from './speechsyn/speechsyn.component';

const routes: Routes = [
  { path: 'texttospeech', component: SpeechsynComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
