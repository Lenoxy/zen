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
    return this.httpClient.post<boolean>(`https://zen-api.schlauduau.ch/add`, {
      src: imagePngBase64,
      caption: caption,
      password: passwordHash
    });
  }

  getBulkImage(): Observable<Image[]>  {
    return this.httpClient.get<Image[]>(`https://zen-api.schlauduau.ch/p`)
  }

  getSingleImage(id: string): Observable<Image> {
    return this.httpClient.get<Image>(`https://zen-api.schlauduau.ch/p/${id}`)
  }
}
