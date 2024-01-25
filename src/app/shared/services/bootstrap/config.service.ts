import {HttpBackend, HttpClient} from "@angular/common/http";
import {IConfig} from "./config.models";
import {Observable, tap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppConfigService {

  get unsplashAccessKey(): string {
    return this._unsplashAccessKey;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  private _unsplashAccessKey = '';
  private _baseUrl = '';

  private httpClient: HttpClient;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  loadConfig(): Observable<unknown> {
    return this.httpClient
      .get<IConfig>('assets/configs/config.json')
      .pipe(tap((config: IConfig) => {
          this._unsplashAccessKey = config.unsplashAccessKey;
          this._baseUrl = config.baseUrl;
        }),
      );
  }
}
