import { Component } from '@angular/core';
import { routesList } from '../../../shared/constants';

@Component({
  templateUrl: './empty-route.component.html',
  styleUrls: ['./empty-route.component.scss'],
})
export class MyEmptyPage {
  public homePageUrl = `/${routesList[0].path}`;
}
