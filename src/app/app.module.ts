import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NoConflictStyleCompatibilityMode} from '@angular/material';
import { NgUploaderModule } from 'ngx-uploader';
import {FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

import { AppComponent } from './app.component';
import {DragDropComponent} from './drag-drop.component';
import {UploadComponent} from './upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    UploadComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoConflictStyleCompatibilityMode,
    NgUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
