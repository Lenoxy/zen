import { Injectable } from '@angular/core';
import Compressor from 'compressorjs';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {
  public async compressFile(image: File, quality: number, height: number): Promise<Blob>{
    return new Promise((resolve, reject) => {
      new Compressor(image, {
        quality,
        height,
        success(blob) {
          console.log(blob)
          resolve(blob as Blob);
        },
        error(err) {
          console.error(err.message);
          reject(err.message)
        },
      });
    });

  }

}
