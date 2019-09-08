import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OneNews } from '../../models/OneNews';
import { NewsService } from '../../services/news.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-newsline',
  templateUrl: './newsline.component.html',
  styleUrls: ['./newsline.component.css']
})
export class NewslineComponent implements OnInit {
  news: OneNews;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private location: Location) { }

  ngOnInit() {
    this.getOneNews();
  }

  getOneNews(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.news = this.newsService.getOneNews(id);
  }

  goBack(): void {
    this.location.back();
  }
}