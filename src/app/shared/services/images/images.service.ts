import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {ImagesApiService} from "./images-api.service";
import {Image} from "./images.models";

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private api: ImagesApiService) {
  }

  getPhotos(page: number, records: number): Observable<Image[]> {
    return this.api
      .getPhotos(page, records)
      .pipe(map((dtos) => dtos.map((dto) => new Image(dto))));
  }
}
