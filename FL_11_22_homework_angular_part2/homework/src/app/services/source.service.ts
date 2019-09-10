import { Injectable } from '@angular/core';
import { SOURCE } from '../mocks/mock-source';
import { Source } from '../models/Source';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor() { }

  getSources(): Source[] {
    return [
      { id: 0, source: "Select Source" }, // all sources
      ...SOURCE
    ];
  }
}
