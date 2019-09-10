import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewslineComponent } from './components/newsline/newsline.component';
import { NewslinesComponent } from './components/newslines/newslines.component';
import { FormsModule } from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

// export const firebaseConfig = {
//   apiKey: "AIzaSyDdGbF6OgjJGvi7z1t0rSpnNW8E_mXQwzA",
//   authDomain: "homework-41c9a.firebaseapp.com",
//   databaseURL: "https://homework-41c9a.firebaseio.com",
//   projectId: "homework-41c9a",
//   storageBucket: "homework-41c9a.appspot.com",
//   messagingSenderId: "project-554321765290",
//   // appId: "1:772484142497:web:9a2c8dedf0ea54e"
// };

export const firebaseConfig = {
  apiKey: "AIzaSyDdGbF6OgjJGvi7z1t0rSpnNW8E_mXQwzA",
  authDomain: "homework-41c9a.firebaseapp.com",
  databaseURL: "https://homework-41c9a.firebaseio.com",
  projectId: "homework-41c9a",
  storageBucket: "homework-41c9a.appspot.com",
  messagingSenderId: "554321765290",
  appId: "1:554321765290:web:d175d5c4394270d35941d3"
}

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
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
