import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyObject, myObjects } from '../../../shared/constants';
import { MyObjectListService } from './object-list.service';
import { IMusicStore } from '../../../services/api/types/response';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
})
export class MyObjectListComponent {
  constructor(private router: Router, private route: ActivatedRoute,
    private myObjectListService: MyObjectListService) {}

  public myObjectsList: MyObject[] = myObjects;

  public myMusicStore$?: Observable<IMusicStore[]>;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }

  public ngOnInit(): void {
    this.myMusicStore$ = this.myObjectListService.getMusicStoreList()
  }
}
