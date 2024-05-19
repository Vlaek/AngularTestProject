import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyMusicListService } from '../../music-list.service';
import { Observable } from 'rxjs';
import { IMusicStore } from '@shared/types/model';

@Component({
  selector: 'my-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
})
export class MyMusicListComponent {
  constructor(private router: Router, private route: ActivatedRoute,
    private myMusicListService: MyMusicListService) {}

  public myMusicStore$?: Observable<IMusicStore[]>;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }

  public ngOnInit(): void {
    this.myMusicStore$ = this.myMusicListService.getMusicStoreList()
  }
}
