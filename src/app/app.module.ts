import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BookRideComponentComponent } from './book-ride-component/book-ride-component.component';
import {RideFilterPipePipe} from '../pipes/ride-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookRideComponentComponent,
    RideFilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
