import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoListItemComponent } from './video-list/video-list-item/video-list-item.component';

const DashboardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent, VideoListItemComponent],
  imports: [
    CommonModule, RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule { }
