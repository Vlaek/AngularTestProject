import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IMusicStore } from '../../../services/api/types/model';
import { MyMusicListService } from '../list/music-list.service';
import { Observable, first, map } from 'rxjs';

@Component({
  selector: 'my-music-item',
  templateUrl: './music-item.component.html',
  styleUrl: './music-item.component.scss',
})
export class MyMusicItemComponent implements OnInit {
  public myMusicList$?: Observable<IMusicStore[]>;
  public myMusicItem$?: IMusicStore;

  constructor(private route: ActivatedRoute,
    private myMusicListService: MyMusicListService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.item = myMusics[params['id']];
      this.myMusicList$ = this.myMusicListService.getMusicStoreById(params['id'])
      this.myMusicList$.pipe(
        map((item: IMusicStore[]) => item[0]), // Получаем первый элемент массива
        first() // Берем только первое значение и завершаем поток
      ).subscribe(firstMusicStore => {
        this.myMusicItem$ = firstMusicStore;
      });
    });
  }

  // public ngOnInit(): void {
  //   this.myMusicItem$ = this.myMusicListService.getMusicStoreById(params['id'])
  // }
}
