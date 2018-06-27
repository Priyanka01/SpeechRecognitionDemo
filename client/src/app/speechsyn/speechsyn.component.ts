import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
// import { SpeechSynthesis } from '@angular-devkit/build-angular';
// import { SpeechSynthesisUtterance } from '@angular/core';

interface IWindow extends Window {
  SpeechSynthesisUtterance: any;
  SpeechSynthesis: any;
}

@Component({
  selector: 'app-speechsyn',
  templateUrl: './speechsyn.component.html',
  styleUrls: ['./speechsyn.component.css']
})


export class SpeechsynComponent implements OnInit {

//The speechSynthesis read-only property of the 
// Window object returns a SpeechSynthesis object, which is the entry point into using Web Speech API speech synthesis functionality.  
//  synth = window.speechSynthesis;

voices = [];
speakthis : any;

  constructor(private _httpService: HttpService,private _router: Router) {
    const {SpeechSynthesisUtterance}: IWindow = <IWindow>window;
    const {SpeechSynthesis}: IWindow = <IWindow>window;
   }

  ngOnInit() {
  }

  selectVoice() {

    console.log("IN SELECT VOICE",this.speakthis)
    const awaitVoices = new Promise(resolve=> 
      window.speechSynthesis.onvoiceschanged = resolve)  
    .then(()=> {
      const synth = window.speechSynthesis;
  
      var voices = synth.getVoices();
      console.log("***",voices)
  
      const utterance = new SpeechSynthesisUtterance();
      utterance.voice = voices[0];
      console.log(voices[0].lang)  
      utterance.text = this.speakthis 
      synth.speak(utterance)
    });
  }

  onSubmit(event:any):void {
    // event.preventDefault();
    console.log(`Click event is working with event: ${event}`);
    this.selectVoice()
  }
}
