import {Injectable, OnInit} from '@angular/core';
import {Image} from "./image";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  uploadImage(imagePngBase64: string, caption: string, passwordHash: string): Observable<boolean> {
    console.log("sending data...")
    return this.httpClient.post<boolean>(`http://localhost:3000/add`, {
      src: imagePngBase64,
      caption: caption,
      password: passwordHash
    });
  }

  getBulkImage(): Observable<Image[]>  {
    return this.httpClient.get<Image[]>(`http://localhost:3000/p`)
  }

  getSingleImage(id: string): Observable<Image> {
    return this.httpClient.get<Image>(`http://localhost:3000/p/${id}`)
  }
}
