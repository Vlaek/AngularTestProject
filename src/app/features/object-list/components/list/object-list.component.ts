import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyObject, myObjects } from '@shared/constants';

@Component({
  selector: 'my-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss'],
})
export class MyObjectListComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public myObjectsList: MyObject[] = myObjects;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
