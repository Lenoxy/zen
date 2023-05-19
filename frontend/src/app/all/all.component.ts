import { Component, OnInit } from '@angular/core';
import {Image} from "../image";
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  public images: Image[] | undefined;


  ngOnInit(): void {
    this.backendService.getBulkImage().subscribe((_: Image[]) => {
      this.images = _;
      console.log(this.images)
    })
  }

}
