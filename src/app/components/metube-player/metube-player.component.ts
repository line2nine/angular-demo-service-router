import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetubeService } from 'src/app/services/metube/metube.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-metube-player',
  templateUrl: './metube-player.component.html',
  styleUrls: ['./metube-player.component.css']
})
export class MetubePlayerComponent implements OnInit, OnDestroy {
  song: any;
  sub: Subscription;

  constructor
    (
      private metubeService: MetubeService,
      private activatedRouter: ActivatedRoute,
      private domSanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.metubeService.find(id);
    });
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
