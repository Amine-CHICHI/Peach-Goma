import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private GifData: any;

  constructor(private httpClient: HttpClient) {
  }

  getGifs(form: any, keyword: String = form.keyword){
    return this.httpClient.get("https://g.tenor.com/v1/search?q=" + keyword + "&key=LIVDSRZULELA&limit=20")
  }

  GetAllGifs() {
    return  this.httpClient.get("https://g.tenor.com/v1/search?q=&key=LIVDSRZULELA&limit=20")
  }
}
