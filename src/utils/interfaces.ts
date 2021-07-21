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
  title: string;
  image_url: string;
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
