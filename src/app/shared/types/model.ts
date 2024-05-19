export interface IMusicStore {
  id: number;
  author: string;
  title: string;
  desc: string;
  genre: string;
  img: string;
  price: number;
  tracklist: {
    id: number;
    name: string;
    duration: string;
  }[];
}

export interface ITrack {
  id: number;
  img: string;
  name: string;
  author: string;
  duration: string;
  explicit: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  image_url: string;
  category: string;
  views: number;
  start_date: string;
  end_date: string;
  discount: string;
  old_price: string;
  new_price: string;
}