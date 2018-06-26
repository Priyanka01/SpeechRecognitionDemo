import { Component,OnInit,OnDestroy } from '@angular/core';
import { SpeechRecognitionService } from 'speech-recognition.service';
import { HttpService } from './http.service';
// import { SpeechRecognitionService } from '/client/speech-recognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showSearchButton: boolean;
  speechData: string;
  speechObj:any;
  pic:any;  
  allpics:any;
  actions = [ 'left','right'] 

    constructor(private speechRecognitionService: SpeechRecognitionService,private _httpService: HttpService) {
        this.showSearchButton = true;
        this.speechData = "";
        this.speechObj = {'name':"",'imgurl':"",position:100}
        this.pic = ""
    }

    ngOnInit() {
        console.log("hello")
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
                    // for(var i = 0; i < this.actions.length; i++){
                        if(this.speechData == 'right'){
                            this.pic.position += 125;
                            console.log("Moving right",this.pic.position)
                        }
                        if(this.speechData == 'left'){
                            this.pic.position -= 125;
                            console.log("Moving left",this.pic.position)
                        }    
    
                }
                else{
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

    // activateSpeechSearch(): void {
    //   // let observable = this._httpService.addObject(this.speechData)

    // }

//     displayObj(){
//         let observable = this._httpService.getOnePicture('Apple')
//         observable.subscribe(data => {
//         console.log("DATA",data)
//         if(data['errors']){
//             console.log("***",data['errors'])
//         }
//         else{
//         console.log("data from server",data);
//         this.pic = data[0].imgurl
//         console.log("IMG",this.pic )
//         }
//     });
//   }

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

//   deactivateSpeechSearch(): void {
//      var s = this.speechRecognitionService.DestroySpeechObject();
//     console.log("Recognition deactivated", this.speechRecognitionService)
//     this.speechRecognitionService = s
//   }


createObject(){
    this.speechObj.name = "Orange"
    this.speechObj.imgurl = "http://www.atozpictures.com/admin/uploads/2015/07/orange-photos.jpg"
    // this.speechObj.position = 100
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


