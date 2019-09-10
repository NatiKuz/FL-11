import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OneNews } from '../../models/OneNews';
import { Source } from '../../models/Source';
import { SourceService} from '../../services/source.service';
import { FirebaseService} from '../../services/firebase.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newslines',
  templateUrl: './newslines.component.html',
  styleUrls: ['./newslines.component.css']
})
export class NewslinesComponent implements OnInit, AfterViewInit {
  news: OneNews[];
  sources: Source[];
  filter: string;
  defaultSourceId: number = 0;
  curSourceId: number = 0;
  oldNews: OneNews[];

  constructor(
    private sourceService: SourceService,
    private router: Router,
    private firebase: FirebaseService
  ) { }

  ngAfterViewInit() {
    this.firebase.get().snapshotChanges().pipe(
       map((actions: any) =>
          actions.map((a: any) => {
            return { key: a.payload.key, ...a.payload.val() }
          })
       )
    ).subscribe(items => {
      this.news = items.map(rows => ({ id: rows.key, ...rows.content}));
      this.oldNews = this.news;
    });
  }

  ngOnInit() {
    this.getSources();
  }

  goAddNews(): void {
    this.router.navigateByUrl('/create-news');
  }

  getSources(): void {
    this.sources = this.sourceService.getSources();
  }

  setSourceId(sourceId: string): void {
    this.curSourceId = parseInt(sourceId, 10);
  }

  runFilter(): void {
    if (this.filter) {
      const regex = new RegExp(this.filter, "gi");
      this.news = this.oldNews.filter(item => item.descShort && item.descShort.search(regex) >= 0);
    } else {
      this.news = this.oldNews;
    }
  }
}
