import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailsComponent,
    FilterPipe,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
