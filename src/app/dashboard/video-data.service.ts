import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from './dashboard-types';

@Injectable({
  providedIn: 'root'
})


export class VideoDataService {

    constructor(private http: HttpClient) { }

    loadVideos(): Observable<Video[]> {
      return this.http
        .get<Video[]>('http://localhost:8085/videos')
        .pipe(map(videos => videos.map(v => {
          v.title = v.title.toUpperCase();
          return v;
        })));
    }
}
