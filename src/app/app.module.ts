import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { OntactComponent } from './ontact/ontact.component';
import { Help1Component } from './help1/help1.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    OntactComponent,
    Help1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
