import {IImageDto, IImageUrlsDto} from "./images-api.models";

export class Image {
  alt_description: string;
  created_at: string;
  description: string;
  height: number;
  width: number;
  likes: number;
  id: string;
  urls: ImageUrls;

  constructor(dto: IImageDto) {
    this.alt_description = dto.alt_description;
    this.created_at = dto.created_at;
    this.description = dto.description;
    this.height = dto.height;
    this.width = dto.width;
    this.likes = dto.likes;
    this.id = dto.id;
    this.urls = new ImageUrls(dto.urls);
  }
}

export class ImageUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;

  constructor(dto: IImageUrlsDto) {
    this.full = dto.full;
    this.raw = dto.raw;
    this.regular = dto.regular;
    this.small = dto.small;
    this.small_s3 = dto.small_s3;
    this.thumb = dto.thumb;
  }
}
