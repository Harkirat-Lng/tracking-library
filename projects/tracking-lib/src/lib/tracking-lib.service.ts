import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingLibService {

  constructor(@Inject(DOCUMENT) private document: Document) { 
   
  }
  clickEvent(){
    console.log('click event called');
    this.document.addEventListener('click',(event)=>{
      const clickedElem=event.target as HTMLElement;
      const idValue=clickedElem.getAttribute('id');
      const nameValue=clickedElem.getAttribute('name');
      //call to microservice
    })
  }
  blurEvent(event:any) {
    console.log('blur event called');
    this.document.addEventListener('blur',(event)=>{
      const focusedElem=event.target as HTMLElement;
      const idValue=focusedElem.getAttribute('id');
      const nameValue=focusedElem.getAttribute('name');
      //call to microservice
    })
}


changeEvent(event:any) {
  console.log('change event called');
  this.document.addEventListener('change',(event)=>{
    const changedElem=event.target as HTMLElement;
    const idValue=changedElem.getAttribute('id');
    const nameValue=changedElem.getAttribute('name');
    //call to microservice
  })
}

trackEvent(elementType: string, elementName: string, elementValue: string) {
    console.log('elementType', elementType);
    console.log('elementName', elementName);
    console.log('elementValue', elementValue);
}
}