interface IFromServerDocument {
  data: {
    id: number | null;
    author: string | null;
    title: string | null;
    desc: string | null;
    genre: string | null;
    img: string | null;
    price: number | null;
    tracklist: {
      id: number | null;
      name: string | null;
      duration: string | null;
    }[] | null;
  }[] | null;
}

export interface IServerBundle<T> {
  data: T[] | null;
}

export interface IDataMusicStore {
  id: number | null;
  author: string | null;
  title: string | null;
  desc: string | null;
  genre: string | null;
  img: string | null;
  price: number | null;
  tracklist: {
    id: number | null;
    name: string | null;
    duration: string | null;
  }[] | null;
}

export interface IDataTrack {
  id: number | null;
  file: string | null;
  name: string | null;
  author: string | null;
  duration: string | null;
  explicit: boolean | null;
}

export interface IDataProduct {
  name: string | null;
  image_url: string | null;
  logo_url: string | null;
  category: string | null;
  views: number | null;
  start_date: string | null;
  end_date: string | null;
  discount: string | null;
  stars: boolean | null;
  old_price: string | null;
  new_price: string | null;
}