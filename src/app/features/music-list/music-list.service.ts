import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, map } from 'rxjs';
import { IMusicStore } from '../../shared/types/model';

@Injectable({
  providedIn: 'root'
})
export class MyMusicListService {

  constructor(private _httpClient: HttpClient) {}

  public getMusicStoreList(): Observable<IMusicStore[]> {
    const response = this._httpClient
      .get<IMusicStore[]>('https://64c9ec74b2980cec85c28b5f.mockapi.io/music');

    return response;
  }

  public getMusicStoreById(id: number): Observable<IMusicStore> {
    const response = this._httpClient
      .get<IMusicStore[]>(`https://64c9ec74b2980cec85c28b5f.mockapi.io/music?id=${id}`);

    return response.pipe(
      map((item: IMusicStore[]) => item[0]),
      first()
    );
  }
}
