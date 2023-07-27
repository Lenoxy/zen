import {Component, Input, OnInit} from '@angular/core';
import {BackendService} from "../backend.service";
import {ImageProcessingService} from "../image-processing.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @Input()
  public caption: string = "";

  imageBase64: string | undefined;

  thumbnailBase64: string | undefined = "anything";

  constructor(private backendService: BackendService, private imageProcessingService: ImageProcessingService) {
  }

  ngOnInit(): void {
  }

  async uploadImage(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files![0];

    const compressedFile: Blob = await this.imageProcessingService.compressFile(file, 1, 2000);
    this.imageBase64 = await this.fileToBase64(compressedFile);

    const thumbnailFile: Blob = await this.imageProcessingService.compressFile(file, 0.8, 720);
    this.thumbnailBase64 = await this.fileToBase64(thumbnailFile)

  }

  private async fileToBase64(imgBlob: Blob): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(imgBlob)
      reader.onloadend = () => {
        console.log('RESULT', reader.result)
        resolve(reader.result as string);
      }
    });
  }

  async send() {
    console.log("sending:", this.caption)
    console.log(this.imageBase64)

    this.imageBase64 && this.thumbnailBase64 ? this.backendService.uploadImage(this.imageBase64, this.thumbnailBase64, this.caption).subscribe((b) => console.log("success:", b)) : null;
  }
}


