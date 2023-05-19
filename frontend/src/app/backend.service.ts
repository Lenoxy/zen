import {Injectable, OnInit} from '@angular/core';
import {Image} from "./image";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BackendService implements OnInit {
  // @ts-ignore
  private client: MongoClient
  private dbName = "zen";
  // @ts-ignore
  private db: Db;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  async ngOnInit() {
  }

  // uploadImage(): boolean {
  //
  // }
  //
  getBulkImage(): Observable<Image[]>  {
    return this.httpClient.get<Image[]>(`http://localhost:3000/p`)
  }

  getSingleImage(id: string): Observable<Image> {
    return this.httpClient.get<Image>(`http://localhost:3000/p/${id}`)
  }
}
