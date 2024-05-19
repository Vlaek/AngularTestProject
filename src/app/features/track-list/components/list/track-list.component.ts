import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyTrackListService } from '../../track-list.service';
import { Observable } from 'rxjs';
import { ITrack } from '@shared/types/model';

@Component({
  selector: 'my-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class MyTrackListComponent {
  constructor(private router: Router, private route: ActivatedRoute,
    private myTrackListService: MyTrackListService) {}

  public myTrackList$?: Observable<ITrack[]>;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }

  public ngOnInit(): void {
    this.myTrackList$ = this.myTrackListService.getTrackList()
  }
}
