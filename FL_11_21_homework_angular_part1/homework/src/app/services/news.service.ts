import { Injectable } from '@angular/core';
import { NEWS } from '../mocks/mock-news';
import { OneNews } from '../models/OneNews';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor() { }

  getNews(sourceId: number, filter: string = ''): OneNews[] {
    let news: OneNews[];
    
    if (sourceId) {
      news = NEWS.filter(item => item.sourceId === sourceId);
    }  else {
      news = [...NEWS];
    }

    if (filter) {
      const regex = new RegExp(filter, "gi");
      return news.filter(item => item.descShort.search(regex) > 0);
    }

    return news;
  }

  getOneNews(id: number): OneNews {
    return NEWS.find(item => item.id === id)
  }

  saveOneNews(news: OneNews): boolean {
    // Save new news
    console.log('News saved: ', news);
    return true;
  }
}