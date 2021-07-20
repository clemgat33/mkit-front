export interface Meta {
  title: string;
  description: string;
  og_title: string;
  og_description: string;
  og_image?: string;
}

export interface MovieOverviewProps{
  title: string;
  image_url: string;
}

export interface MoviePreviewProps{
  title: string;
  image_url: string;
  date: string;
  genres: string[];
  runtime: number;
  summary: string;
  url: string;
}
