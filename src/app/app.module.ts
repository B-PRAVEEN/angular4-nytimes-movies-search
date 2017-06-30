import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HotTableModule } from 'ng2-handsontable';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    HttpModule,
    FormsModule,
    HotTableModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
