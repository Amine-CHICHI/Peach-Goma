import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {GifService} from "./home-page/gif.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
