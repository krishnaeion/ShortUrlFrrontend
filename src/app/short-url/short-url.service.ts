import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShortUrlServiceService {
shortUrl:string=environment.shortenUrl;
getShortUrls:string=environment.getShortUrl;
  constructor(private httpClient: HttpClient) { 

  }
  getShortUrl(shortId:any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<any>(`${this.getShortUrls}/${shortId}`,{ headers });
  }
  shortenUrl(data: string): Observable<any> {
    const requestBody:any={
      originalUrl:data
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(this.shortUrl, requestBody, { headers });
  }
}
