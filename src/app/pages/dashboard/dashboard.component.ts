import {AsyncPipe, NgForOf, NgOptimizedImage} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ImageService} from "../../shared/services/images/images.service";
import {Image} from "../../shared/services/images/images.models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [NgForOf, AsyncPipe, NgOptimizedImage]
})
export class DashboardComponent implements OnInit {

  images$: Observable<Image[]>;

  constructor(private imageService: ImageService) {
    this.images$ = this.imageService.getPhotos(1, 10);
  }

  ngOnInit(): void {

  }
}
