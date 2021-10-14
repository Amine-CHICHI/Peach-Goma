import {Component, OnInit} from '@angular/core';
import {GifService} from "./gif.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  GifData: any;


  constructor(private gifService: GifService,private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.gifService.GetAllGifs().subscribe(response=>{
      this.GifData = response
    },(error=>{
      console.log(error)
    }))

  }

  SearchGifs(form: any) {
    this.gifService.getGifs(form).subscribe(
      (response) => {
        this.GifData = response
        console.log(this.GifData)
      }, (error => {
        console.log(error)
      })
    )
  }
}
