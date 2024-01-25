import {Injectable} from "@angular/core";
import {AppConfigService} from "./config.service";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BootstrapService {
  constructor(private configService: AppConfigService) {
  }

  async init(): Promise<void> {
    await firstValueFrom(this.configService.loadConfig());
  }
}
