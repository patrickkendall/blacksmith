import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { Input } from '@angular/core';

@Component({
  selector: 'app-audio-play',
  templateUrl: './audio-play.component.html',
  styleUrls: ['./audio-play.component.css'],
})
export class AudioPlayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() pageSizeOptions = [10, 20, 30];
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;
  // Material Style Advance Audio Player Playlist
  number: any = '9';
  playlist = [
    {
      title: 'In Love | A Himitsu feat. Nori',
      link: 'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0'
    },
    {
      title: 'Cartoon – On & On (feat. Daniel Levi) [NCS Release]',
      link: 'https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0'
    }
  ];

  triggerOnEnded(event: any) {
    console.log('ended');
  }

}
