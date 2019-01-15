import { DatePipe } from "@angular/common";

export interface IFilm {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      id: number;
    }
  ];
  total_pages: number;
  total_results: number;
}
