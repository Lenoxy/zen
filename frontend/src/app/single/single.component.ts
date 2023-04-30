import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor(private route:ActivatedRoute, private databaseService: DatabaseService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    console.log(id)
    this.databaseService.getSingleImage("1234")
  }

}
