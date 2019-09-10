import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';  
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { OneNews } from '../models/OneNews';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    news: any;

    constructor(public db: AngularFireDatabase) {
        this.news = this.db.list('/news', ref => ref.limitToFirst(10));
    }

    get(){
      this.news = this.db.list(`/news`);
      return this.news;
    }

    post(value: OneNews): void {
        this.news.push({ content: value, done: false });
    }
}