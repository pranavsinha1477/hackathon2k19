import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {

  data : any[];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    console.log(this.http.get("assets\json\TestDataESG.json"));
    return this.http.get("assets\json\TestDataESG.json");
  }
}
