import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

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

  

}
