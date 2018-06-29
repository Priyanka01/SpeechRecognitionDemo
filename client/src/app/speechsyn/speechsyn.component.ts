
// export class SpeechsynComponent implements OnInit {

// //The speechSynthesis read-only property of the 
// // Window object returns a SpeechSynthesis object, which is the entry point into using Web Speech API speech synthesis functionality.  
// //  synth = window.speechSynthesis;

// voices = [];
// speakthis : any;

//   constructor(private _httpService: HttpService,private _router: Router) {
//    }

//   ngOnInit() {
//   }

//   selectVoice() {
//     console.log("IN SELECT VOICE",this.speakthis)
//     const awaitVoices = new Promise(resolve=> 
//       window.speechSynthesis.onvoiceschanged = resolve)  
//     .then(()=> {
//       const synth = window.speechSynthesis;
  
//       var voices = synth.getVoices();
//       console.log("***",voices)
  
//       const utterance = new SpeechSynthesisUtterance();
//       utterance.voice = voices[0];
//       console.log(voices[0].lang)  
//       utterance.text = this.speakthis 
//       synth.speak(utterance)
//     });
    
//   }

//   onSubmit(event:any):void {
//     event.preventDefault();
//     console.log(`Click event is working with event: ${event}`);
//     this.selectVoice()
//   }
// }

import { Component,OnInit,OnDestroy } from '@angular/core';
import { SpeechRecognitionService } from 'speech-recognition.service';
import { Router } from '@angular/router';

import { HttpService } from '../http.service';
// import { runInThisContext } from 'vm';
// import { SpeechRecognitionService } from '/client/speech-recognition.service';

@Component({
 selector: 'app-speechsyn',
  templateUrl: './speechsyn.component.html',
  styleUrls: ['./speechsyn.component.css']
})
export class SpeechsynComponent implements OnInit, OnDestroy {
  showSearchButton: boolean;
  speechData: string;
  speechObj:any;
  pic:any;  
  allpics:any;
  show = true
  actions = [ 'left','right'] 

    constructor(private speechRecognitionService: SpeechRecognitionService,private _httpService: HttpService,private _router: Router) {
        this.showSearchButton = true;
        this.speechData = "";
        this.speechObj = {'name':"",'imgurl':"",position:400}
        this.pic = ""
    }

    ngOnInit() {

        // this.displayObj()
        // this.createObject()
        this.displayAll()
    }

    ngOnDestroy() {
        this.speechRecognitionService.DestroySpeechObject();
    }

    activateSpeechSearch(): void {
        // this.showSearchButton = false;

        this.speechRecognitionService.record()
            .subscribe(
            //listener
            (value) => {
                this.speechData = value;
                this.speechObj.name = this.speechData
                console.log("Component",this.speechData )

                if(this.pic && this.actions.includes(this.speechData)){
                        if(this.speechData == 'right'){
                            this.pic.position += 125;
                            console.log("Moving right",this.pic.position)
                            this._httpService.onSubmit("Moving right") 
                        }
                        if(this.speechData == 'left'){
                            this.pic.position -= 125;
                            console.log("Moving left",this.pic.position)
                            this._httpService.onSubmit("Moving left")
                        }   
                }
                else{
                this._httpService.onSubmit("Getting"+value)  
                let observable = this._httpService.pickObject(this.speechObj)
                observable.subscribe(data => {
                  if(data['errors']){
                    console.log("error",data)
                  }
                  else{
                    console.log("######",data);
                    this.pic = data[0]
                  }
                })
                }
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                    console.log("--restatring service--");
                    this.activateSpeechSearch();
                }
            },
            //completion
            () => {
                this.showSearchButton = true;
                console.log("--complete--");
                this.activateSpeechSearch();
            
            });
    }
  displayAll(){
        let observable = this._httpService.getAllPictures()
        observable.subscribe(data => {
        console.log("DATA",data)
        if(data['errors']){
            console.log("***",data['errors'])
        }
        else{
        console.log("data from server",data);
        this.allpics = data
        console.log("IMGS",this.allpics )
        }
    });
  }

createObject(){
    this.speechObj.name = "Ball"
    this.speechObj.imgurl = "https://tse3.mm.bing.net/th?id=OIP.bI9LUHNm1eh_uIsJM2QvyQHaHa&pid=Api"
    let observable = this._httpService.addObject(this.speechObj)
    observable.subscribe(data => {
      if(data['errors']){
        console.log("error",data)
      }
      else{
        console.log("######",data);
        // this.pic = data[0]
      }
    })
}


}


