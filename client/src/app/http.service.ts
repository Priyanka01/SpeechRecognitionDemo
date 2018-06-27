import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  voices = [];
  speakthis : any;
  constructor(private _http: HttpClient) { }

  addObject(speechDataObj){
    console.log("Services - addObject",speechDataObj)
    return this._http.post('/create',speechDataObj)
  }

  pickObject(pid){
    console.log("getOnePic",pid.name)
    return this._http.get('/display/'+pid.name);
  }

  getAllPictures(){
    console.log("getAllPictures")
    return this._http.get('/displayAll');
  }


  selectVoice() {
    console.log("IN SELECT VOICE",this.speakthis)
    const awaitVoices = new Promise(resolve=> 
      window.speechSynthesis.onvoiceschanged = resolve)  
    .then(()=> {
      const synth = window.speechSynthesis;
  
      var voices = synth.getVoices();
      this.voices = voices
      console.log("***",voices)
  
      const utterance = new SpeechSynthesisUtterance();
      utterance.voice = voices[0];
      console.log(voices[0].lang)  
      utterance.text = this.speakthis 
      synth.speak(utterance)
    });
  }

  onSubmit(text):void {
    this.speakthis = text
    if(window.speechSynthesis && this.voices.length > 0) {
      console.log("In if")
      const utterance = new SpeechSynthesisUtterance();
      utterance.voice = this.voices[0];
      console.log(this.voices[0].lang)  
      utterance.text = this.speakthis 
      window.speechSynthesis.speak(utterance)
    }
    else{
      this.selectVoice()
    }
    
  }


  

}
