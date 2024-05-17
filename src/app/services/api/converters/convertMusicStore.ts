import { IMusicStore } from "../types/model";
import { IDataMusicStore, IServerBundle } from "../types/response";

interface IServerTrack {
  id: number | null;
  name: string | null;
  duration: string | null;
}

interface ITrack {
  id: number;
  name: string;
  duration: string;
}

const convertTrackListFromServer = (tracklist: IServerTrack[]): ITrack[] => {
  return tracklist.map((track: IServerTrack) => {
    const { id, name, duration } = track;
    return {
      id: id ?? -1,
      name: name || '',
      duration: duration || '',
    }
  })
}

export const fromServer = (response: IDataMusicStore[]): IMusicStore[] => {
  const newResponse = response.map(item => {
    const { id, author, desc, genre, img, price, title, tracklist } = item;

    return {
      id: id ?? -1,
      author: author || '',
      desc: desc || '',
      genre: genre || '',
      img: img || '',
      price: price ?? 0,
      title: title || '',
      tracklist: convertTrackListFromServer(tracklist ?? []),
    }
  }) ?? [];

  return newResponse;
};

export const toServer = () => {
  return [];
};
