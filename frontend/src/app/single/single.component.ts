import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BackendService} from "../backend.service";
import {Image} from "../image";
import {retry, tap} from "rxjs";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit{

  constructor(private route:ActivatedRoute, private databaseService: BackendService) { }

  private id = this.route.snapshot.paramMap.get('id')!;
  public image: Image | undefined;


  ngOnInit(): void {
    console.log("init")
    this.databaseService.getSingleImage(this.id).subscribe((_ : Image) => {this.image = _; console.log(this.image)})
  }
}
