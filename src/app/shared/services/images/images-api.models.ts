export interface IImageDto {
  alt_description: string;
  created_at: string;
  description: string;
  height: number;
  width: number;
  likes: number;
  id: string;
  urls: IImageUrlsDto;
}

export interface IImageUrlsDto {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}
