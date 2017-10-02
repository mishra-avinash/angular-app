import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NoConflictStyleCompatibilityMode} from '@angular/material';
import {DragDropComponent} from './drag-drop.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoConflictStyleCompatibilityMode,
    // DragDropComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
