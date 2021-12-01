import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import { NameFilterPipe } from './pipes/name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    NameFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
