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
  reviews: string[] | []
}



export interface IUser {
  _id?: string;
  username: string | undefined;
  favorites: number[];
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}

export type ApiDataTypeUser = {
  message: string
  status: string
  users: IUser[]
  user?: IUser
}
