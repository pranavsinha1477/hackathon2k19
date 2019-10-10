/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component } from "@angular/core";
import { MessageService } from "app/services/message.service";
import { Observable } from "rxjs/Observable";

interface birdType {
    id?: string;
    Nameid?: string;
    Type?: string;
    category?: string;
    value?: number;
}

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    data: any[];
    list :  birdType[];
    sum : number;
    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.getData();
        // this.calc();
    }

    getData() {

        this.messageService.getJSON().subscribe(
            data => {
              this.list = data as birdType [];	 // FILL THE ARRAY WITH DATA.
            }
            
          );
        
    }
  
}