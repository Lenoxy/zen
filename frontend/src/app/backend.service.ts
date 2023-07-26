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

  uploadImage(imagePngBase64: string, caption: string, passwordHash: string): Observable<boolean> {
    console.log("sending data...")
    return this.httpClient.post<boolean>( `${environment.apiEndpoint}/add`, {
      src: imagePngBase64,
      caption: caption,
      password: passwordHash
    });
  }

  getBulkImage(): Observable<Image[]>  {
    return this.httpClient.get<Image[]>(`${environment.apiEndpoint}/p`)
  }

  getSingleImage(id: string): Observable<Image> {
    return this.httpClient.get<Image>(`${environment.apiEndpoint}/p/${id}`)
  }
}
