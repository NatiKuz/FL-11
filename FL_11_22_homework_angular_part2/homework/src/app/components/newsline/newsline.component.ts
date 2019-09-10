import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OneNews } from '../../models/OneNews';
import { NewsService } from '../../services/news.service';
import { Location } from '@angular/common';
import { FirebaseService} from '../../services/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newsline',
  templateUrl: './newsline.component.html',
  styleUrls: ['./newsline.component.css']
})
export class NewslineComponent implements OnInit, AfterViewInit  {
  news: OneNews = new OneNews();
  id: string;

  constructor(private route: ActivatedRoute, private location: Location, private firebase: FirebaseService) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.firebase.get().snapshotChanges().pipe(
       map((actions: any) =>
          actions.map((a: any) => {
            return { key: a.payload.key, ...a.payload.val() }
          })
       )
    ).subscribe(items => {
      this.news = items
        .map(rows => ({ id: rows.key, ...rows.content}))
        .find(item => item.id === this.id);
    });
  }

  goBack(): void {
    this.location.back();
  }
}