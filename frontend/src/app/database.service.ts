import {Injectable, OnInit} from '@angular/core';
import {Image} from "./image";
import {Db, MongoClient} from 'mongodb'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit{
  // @ts-ignore
  private client: MongoClient
  private dbName = "zen";
  // @ts-ignore
  private db: Db;

  constructor() {
  }

  async ngOnInit() {
    const url = 'mongodb://localhost:27017';
    this.client = new MongoClient(url);
    await this.client.connect();
    console.log('Connected successfully to server');
    this.db = this.client.db(this.dbName);
  }

  // uploadImage(): boolean {
  //
  // }
  //
  // getBulkImage(): Image[] {
  //
  // }

  getSingleImage(id: string): Image {
    // @ts-ignore
    return this.db.zen.findOne()
  }
}
