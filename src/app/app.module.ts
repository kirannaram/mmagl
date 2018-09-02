import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSelectModule, INgxSelectOptions } from "ngx-select-ex";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { HttpService } from "./http.service";
import { RouterModule } from "@angular/router";

const CustomSelectOptions: INgxSelectOptions = {
  // Check the interface for more options
  optionValueField: "id",
  optionTextField: "name"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: "", component: MenuComponent }]),
    NgxSelectModule.forRoot(CustomSelectOptions)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
