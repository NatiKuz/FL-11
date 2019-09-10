import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { OneNews } from 'src/app/models/OneNews';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  news: OneNews = new OneNews();

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() { }

  save(): void {
    if (this.newsService.saveOneNews(this.news)) {
      this.goToNewslinesLink();
    }
  }

  goToNewslinesLink(): void {
    this.router.navigateByUrl('/');
  }
}
