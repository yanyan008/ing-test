export interface TvShow {
  id: number;
  name: string;
  rating: Rating;
  summary: string;
  image: Image;
  genres: string[];
}

export interface Rating {
  average: number;
}

export interface Image {
  medium: string;
  original: string;
}

export interface TvShowSearch {
  score: number;
  show: TvShow;
}
