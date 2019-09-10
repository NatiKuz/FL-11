import { Injectable } from '@angular/core';
import { OneNews } from '../models/OneNews';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: OneNews[];
  
  constructor(private firebase: FirebaseService) {}

  saveOneNews(news: OneNews): boolean {
    // Save new news
    console.log('News saved: ', news);
    this.firebase.post(news);
    return true;
  }
}