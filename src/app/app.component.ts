import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Router, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  constructor(private router: Router) {}
  carHmData: string[];
  yearData: string[];
  carInfoData: string[];
  //@Output() InternalPageAccess: EventEmitter<any> = new EventEmitter();
  @ViewChild(HomeComponent) homePath: HomeComponent;
  @ViewChild("myElem") scrollPosition: ElementRef;
  ngOnInit() {
    console.log("test");
    var pathname = window.location.pathname;
    if (window.location.pathname.length >= 2) {
      this.homePath.getcarInfo(pathname);
    }
  }
}