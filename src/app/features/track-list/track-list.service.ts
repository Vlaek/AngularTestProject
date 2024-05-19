import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, map } from 'rxjs';
import { ITrack } from '../../shared/types/model';

@Injectable({
  providedIn: 'root'
})
export class MyTrackListService {

  constructor(private _httpClient: HttpClient) {}

  public getTrackList(): Observable<ITrack[]> {
    const response = this._httpClient
      .get<ITrack[]>('https://64c9ec74b2980cec85c28b5f.mockapi.io/tracks');

    return response;
  }

  public getTrackById(id: number): Observable<ITrack> {
    const response = this._httpClient
      .get<ITrack[]>(`https://64c9ec74b2980cec85c28b5f.mockapi.io/tracks?id=${id}`);

    return response.pipe(
      map((item: ITrack[]) => item[0]),
      first()
    );
  }
}
