import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  constructor() {}
  //@Output() InternalPageAccess: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log("test");
  }
}
