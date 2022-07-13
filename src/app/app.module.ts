import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientformComponent } from './component/patientform/patientform.component';
import { PatientdataComponent } from './component/patientdata/patientdata.component';
import { DdMmYYYYDatePipe } from './datepipe.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PatientformComponent,
    PatientdataComponent,
    DdMmYYYYDatePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
