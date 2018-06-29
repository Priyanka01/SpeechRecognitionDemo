import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechsynComponent } from './speechsyn/speechsyn.component';
import { ThreeDComponent } from './three-d/three-d.component';
import { AppComponent } from './app.component'
import { MappingTwoDComponent } from './mapping-two-d/mapping-two-d.component';

const routes: Routes = [
  { path: 'texttospeech', component: SpeechsynComponent},
  { path:'rotate', component:ThreeDComponent},
  { path:'mapping2d', component:MappingTwoDComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
