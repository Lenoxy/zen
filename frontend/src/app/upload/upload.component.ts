import {Component, Input, OnInit} from '@angular/core';
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  private password: string = "";

  @Input()
  public caption: string = "";

  // @ts-ignore
  private imageBase64: string;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    const username = "admin";
    this.password = prompt("password")!;

    // connect db

    console.log("hi, admin")
  }

  // ts-ignore
  uploadImage(e: any) {
    // ts-ignore
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log('RESULT', reader.result)
      // @ts-ignore
      this.imageBase64 = reader.result;
    }
  }

  async send() {
    console.log("sending:", this.caption)
    console.log(this.imageBase64)
    this.backendService.uploadImage(this.imageBase64, this.caption, this.password).subscribe((b)=> console.log("success:", b));
  }
}


