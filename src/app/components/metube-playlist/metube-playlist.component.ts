import { Component, OnInit } from '@angular/core';
import { MetubeService } from 'src/app/services/metube/metube.service';

@Component({
  selector: 'app-metube-playlist',
  templateUrl: './metube-playlist.component.html',
  styleUrls: ['./metube-playlist.component.css']
})
export class MetubePlaylistComponent implements OnInit {

  constructor(private metubeService: MetubeService) { }

  ngOnInit(): void {
  }

}
