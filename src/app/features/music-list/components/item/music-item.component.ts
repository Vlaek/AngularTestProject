import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMusicStore } from '@shared/types/model';
import { MyMusicListService } from '../../music-list.service';

@Component({
  selector: 'my-music-item',
  templateUrl: './music-item.component.html',
  styleUrl: './music-item.component.scss',
})
export class MyMusicItemComponent implements OnInit {
  public myMusicItem$?: IMusicStore;

  constructor(private route: ActivatedRoute,
    private myMusicListService: MyMusicListService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.myMusicListService.getMusicStoreById(params['id']).subscribe(item => {
        this.myMusicItem$ = item;
      })
   })
  }
}
