import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from '../dashboard-types';

import { VideoDataService } from '../../dashboard/video-data.service';


@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})

export class VideoDashboardComponent implements OnInit {

  videosList: Observable<Video[]>;
  whichVideo: Video;


  setWhichVideo(video: Video){
    this.whichVideo = video;
  }

  constructor(svc: VideoDataService) {
    this.videosList = svc.loadVideos();
  }

  // constructor(http: HttpClient) {
  //       http
  //         .get<Video[]>('https://api.angularbootcamp.com/videos')
  //         .subscribe(vids => this.videosList = vids);
  //     }

  ngOnInit() {
  }

}
