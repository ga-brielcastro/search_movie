export interface Result{
  page: string;
  results: any;
  total_pages: number;
  total_results: number
}

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
}