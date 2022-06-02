import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndPointsService {

  constructor(private http: HttpClient) { }

url =  'https://jsonplaceholder.typicode.com/photos';

getPhotos():Observable<any>{
  return this.http.get(this.url).pipe(map(reponse => reponse))
}
}