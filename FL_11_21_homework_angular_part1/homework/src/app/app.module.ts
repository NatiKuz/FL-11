import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewslineComponent } from './components/newsline/newsline.component';
import { NewslinesComponent } from './components/newslines/newslines.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewsComponent,
    NewslineComponent,
    NewslinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
