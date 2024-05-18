import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDataTrack } from '../../../services/api/types/response';
import { convertMusicStore } from '../../../services/api/converters';
import { IMusicStore } from '../../../services/api/types/model';

@Injectable({
  providedIn: 'root'
})
export class MyObjectListService {

  constructor(private _httpClient: HttpClient) {}

  public getMusicStoreList(): Observable<IMusicStore[]> {
    const response = this._httpClient
      .get<IMusicStore[]>('https://64c9ec74b2980cec85c28b5f.mockapi.io/music');

    return response;
  }

  public getTrackList(): Observable<IDataTrack[]> {
    return this._httpClient.get<IDataTrack[]>('https://64c9ec74b2980cec85c28b5f.mockapi.io/tracks');
  }

  // public getProductList(): Observable<IMusicStore[]> {
  //   return this._httpClient.get<IMusicStore[]>('https://651d237544e393af2d5938ea.mockapi.io/products');
  // }
}