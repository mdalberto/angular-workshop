import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../../dashboard-types';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.scss']
})
export class VideoListItemComponent implements OnInit {


  @Input() video?: Video;

  constructor() { }

  ngOnInit() {
  }

}
