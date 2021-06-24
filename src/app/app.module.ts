import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { QueryPanelComponent } from './query-panel/query-panel.component';

import { FormsModule } from '@angular/forms';
import { QueryByBusIdComponent } from './query-by-bus-id/query-by-bus-id.component';
import { QueryByDatesComponent } from './query-by-dates/query-by-dates.component';
import { QueryByLineIdComponent } from './query-by-line-id/query-by-line-id.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryPanelComponent,
    QueryByBusIdComponent,
    QueryByDatesComponent,
    QueryByLineIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
