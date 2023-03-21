import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-trackingLib',
  template: `
    <p>
      tracking-lib works!
    </p>
  `,
  styles: [
  ]
})
export class TrackingLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //call to backend microservice
    
  }

}
