import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {MaterialExampleModule} from '../material.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
// import { ListComponent } from './list/list.component';
// import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    // ListComponent,
    // MarkdownEditorComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialExampleModule,
    QuillModule.forRoot(), 
    FormsModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
