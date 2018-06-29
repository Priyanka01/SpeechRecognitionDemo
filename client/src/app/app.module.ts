import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechRecognitionService } from 'speech-recognition.service';
import { SpeechsynComponent } from './speechsyn/speechsyn.component';
import { ThreeDComponent } from './three-d/three-d.component';
import { MappingTwoDComponent } from './mapping-two-d/mapping-two-d.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechsynComponent,
    ThreeDComponent,
    MappingTwoDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService,
    SpeechRecognitionService],
    
  bootstrap: [AppComponent,SpeechsynComponent]
})
export class AppModule { }
