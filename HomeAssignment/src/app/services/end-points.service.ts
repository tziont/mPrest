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

url =  ' http://localhost:3000/photos/';

getPhotos():Observable<Photo[]>{
  return this.http.get<Photo[]>(this.url).pipe(map(reponse => reponse))
}
deletePhoto(id:number):Observable<any>{
  return this.http.delete<Photo>(this.url+ id).pipe(map(reponse => reponse))
}
postPhoto(data:any):Observable<any>{
  return this.http.post<any>(this.url,data).pipe(map(reponse => reponse))
}
putPhoto(data:any,id:number){
  return this.http.put<any>(this.url+id,data).pipe(map(reponse => reponse))
}
}