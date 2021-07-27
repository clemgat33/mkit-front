export interface Meta {
  title: string;
  description: string;
  og_title: string;
  og_description: string;
  og_image?: string;
}
export interface Match {
  isExact: boolean;
  params: {movie_id: string};
  path: string;
  url: string;
}


export interface MovieOverviewProps{
  movie_id: number;
  title: string;
  image_url: string | undefined;
}

export interface MoviePreviewProps{
  movie_id: number;
  title: string;
  image_url: string;
  date: string;
  genres: string[];
  runtime: number;
  summary: string;
  url: string;
}

export interface Context {
  users: IUser[] | []
  currentUser: IUser | null
  reviews: IReview[] | []
}



export interface IUser {
  _id?: string;
  username: string | undefined;
  favorites: number[];
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}


export interface IReview  {
  _id?: string;
  movie_id: string;
  author_user_id: string;
  author_username: string;
  rate: 1 | 2| 3 | 4 | 5;
  comment: string;
  createdAt?: string
  updatedAt?: string
}



export interface ApiData  {
  message: string
  status: string
}

export interface ApiDataUser extends ApiData {
  users: IUser[]
  user?: IUser
}

export interface ApiDataMovies extends ApiData {
  movies: any  // eslint-disable-line
}

export interface ApiDataMovie extends ApiData {
  movie: any  // eslint-disable-line
}


export interface ApiDataReview extends ApiData {
  reviews: IReview[]
  review?: IReview
  newReview?: IReview
  updateReview?: IReview
  deletedReview?: IReview

}
