/**
 * Created by andrew.yang on 5/18/2017.
 */
import {OnInit, Component} from "@angular/core";
import { MessageService } from "app/services/message.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    data : any[];
    constructor(private messageService : MessageService) { }

    ngOnInit() {
    }

    getData(){
        this.messageService.getJSON();
    }
}
