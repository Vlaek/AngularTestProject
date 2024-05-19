import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ITrack } from '@shared/types/model';
import { MyTrackListService } from '../../track-list.service';

@Component({
  selector: 'my-track-item',
  templateUrl: './track-item.component.html',
  styleUrl: './track-item.component.scss',
})
export class MyTrackItemComponent implements OnInit {
  public myTrackItem$?: ITrack;

  constructor(private route: ActivatedRoute,
    private myTrackListService: MyTrackListService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.myTrackListService.getTrackById(params['id']).subscribe(item => {
        this.myTrackItem$ = item;
      })
   })
  }
}
