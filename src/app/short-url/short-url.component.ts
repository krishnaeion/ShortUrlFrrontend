import { Component, OnInit } from '@angular/core';
import { ShortUrlServiceService } from './short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {
  longUrl: string="";
  shortenedUrl: string="";
  shortId: any;
  isExpired:boolean=false;
  header:string="SHORT URL";
  isShortened:boolean=false;
  constructor(private  shortUrlServiceService:ShortUrlServiceService ) { }

  ngOnInit(): void {
  }
  shortenUrl() {
    // Call your URL shortening service here
    // For illustration purposes, assume you have a method in urlShortenerService for shortening URLs
    this.shortUrlServiceService.shortenUrl(this.longUrl).subscribe(
      (response:any) => {
        this.shortenedUrl = response.shortUrl;
        this.shortId=response.shortId;
        this.isShortened=true;
      },
      (error:any) => {
        alert('Error shortening URL:');
      }
    );
  }
  openShortenedUrl(){
    this.shortUrlServiceService.getShortUrl(this.shortId).subscribe((response:any)=>{
      
        window.open(response.originalUrl, '_blank');
      
    },(error:any)=>{
      this.isExpired=true;
    })
  }
}
