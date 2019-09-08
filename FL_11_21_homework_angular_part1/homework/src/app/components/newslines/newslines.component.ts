import { Component, OnInit } from '@angular/core';
import { OneNews } from '../../models/OneNews';
import { Source } from '../../models/Source';
import { NewsService} from '../../services/news.service';
import { SourceService} from '../../services/source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newslines',
  templateUrl: './newslines.component.html',
  styleUrls: ['./newslines.component.css']
})
export class NewslinesComponent implements OnInit {
  news: OneNews[];
  sources: Source[];
  filter: string;
  defaultSourceId: number = 0;
  curSourceId: number = 0;

  constructor(
    private newsService: NewsService,
    private sourceService: SourceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSources();
    this.getNews();
  }

  getNews(): void {
    this.news = this.newsService.getNews(this.curSourceId);
  }

  goAddNews(): void {
    this.router.navigateByUrl('/create-news');
  }

  runFilter(): void {
    this.news = this.newsService.getNews(this.curSourceId, this.filter);
  }

  getSources(): void {
    this.sources = this.sourceService.getSources();
  }

  setSourceId(sourceId: string): void {
    this.curSourceId = parseInt(sourceId, 10);
    this.getNews();
  }
}
