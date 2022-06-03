import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Photo} from '../types/photo';

@Injectable({
  providedIn: 'root'
})
export class EndPointsService {

  constructor(private http: HttpClient) { }

url =  'https://jsonplaceholder.typicode.com/photos';

getPhotos():Observable<Photo[]>{
  return this.http.get<Photo[]>(this.url).pipe(map(reponse => reponse))
}
}