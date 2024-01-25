import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IImageDto} from "./images-api.models";
import {AppConfigService} from "../bootstrap/config.service";

@Injectable({
  providedIn: 'root',
})
export class ImagesApiService {
  constructor(private httpClient: HttpClient, private appConfig: AppConfigService) {
  }

  getPhotos(page: number, records: number): Observable<IImageDto[]> {
    const params: HttpParams = new HttpParams({fromObject: {page, per_page: records}});
    return this.httpClient.get<IImageDto[]>(`${this.appConfig.baseUrl}/photos`, {params});
  }
}
