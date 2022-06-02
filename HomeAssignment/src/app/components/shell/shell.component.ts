import { Component, OnInit } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
photos$:Observable<any>

  constructor(private photos:EndPointsService) { }

  ngOnInit(): void {
    this.photos$ =this.photos.getPhotos();
  }
  

}
