import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../dashboard-types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {


  @Input() setWhichVideo: Video;

  constructor() { }

  ngOnInit() {
  }

}
