import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../dashboard-types';
// //bring the data into the component

// const videos = [
//   {
//     description: 'Standup',
//     participants: ['John', 'Paul', 'Ringo', 'George']
//   },
//   {
//     description: 'Meet with the Bills',
//     participants: ['Bill', 'Bill', 'Peter']
//   },
//   {
//     description: 'Working lunch',
//     participants: ['Joe', 'Jane']
//   }
// ];


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})


export class VideoListComponent implements OnInit {

  @Input() videos: Video[] = [];

  @Output() whichVideo = new EventEmitter<Video>();


  // starts out as undifdined below
  selectedVideo: Video;



  selectVideo(video: Video) {
    this.selectedVideo = video;
    this.whichVideo.emit(video);
  }

  constructor() { }

  ngOnInit() {
  }

}
