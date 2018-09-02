import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()

export class HttpService {


  constructor(private httpCall: HttpClient) { }
  
  carYearModel(): Observable<Object>{
    return this.httpCall.get('assets/data/carInfo.json');
  }
  
  menuDetails(): Observable<Object>{
    return this.httpCall.get('assets/data/menu.json');
  }

  
  get(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
                  aCallback(anHttpRequest.responseText);
                }
            }
        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }



//  menuDetails () {
//   this.httpCall.get('/assets/data/menu.json').subscribe(
//      data => {
//        this.menuLinks = data as string [];   // FILL THE ARRAY WITH DATA.
//       console.log(this.menuLinks)
//      },
//      (err: HttpErrorResponse) => {
//        console.log (err.message);
//      }
//    );
//  }
  
  
  

}
