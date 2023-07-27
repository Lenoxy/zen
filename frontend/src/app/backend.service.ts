import {Injectable, OnInit} from '@angular/core';
import {Image} from "./image";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  uploadImage(imageBase64: string, thumbnailBase64: string, caption: string): Observable<boolean> {
    console.log("sending data...")
    return this.httpClient.post<boolean>( `${environment.apiEndpoint}/add`, {
      imageBase64,
      thumbnailBase64,
      caption
    });
  }

  getBulkImage(): Observable<Image[]>  {
    return this.httpClient.get<Image[]>(`${environment.apiEndpoint}/p`)
  }

  getSingleImage(id: string): Observable<Image> {
    return this.httpClient.get<Image>(`${environment.apiEndpoint}/p/${id}`)
  }
}
