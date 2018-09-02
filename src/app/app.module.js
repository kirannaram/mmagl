"use strict";var __decorate=this&&this.__decorate||function(e,o,r,t){var n,p=arguments.length,_=p<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(e,o,r,t);else for(var m=e.length-1;m>=0;m--)(n=e[m])&&(_=(p<3?n(_):p>3?n(o,r,_):n(o,r))||_);return p>3&&_&&Object.defineProperty(o,r,_),_};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),http_1=require("@angular/common/http"),forms_1=require("@angular/forms"),app_component_1=require("./app.component"),header_component_1=require("./header/header.component"),home_component_1=require("./home/home.component"),footer_component_1=require("./footer/footer.component"),menu_component_1=require("./menu/menu.component"),http_service_1=require("./http.service"),router_1=require("@angular/router"),AppModule=function(){function e(){}return e=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,header_component_1.HeaderComponent,home_component_1.HomeComponent,footer_component_1.FooterComponent,menu_component_1.MenuComponent],imports:[platform_browser_1.BrowserModule,http_1.HttpClientModule,forms_1.FormsModule,forms_1.ReactiveFormsModule,router_1.RouterModule.forRoot([{path:"",component:menu_component_1.MenuComponent}])],providers:[http_service_1.HttpService],bootstrap:[app_component_1.AppComponent]})],e)}();exports.AppModule=AppModule;