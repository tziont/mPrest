import { Component, OnInit,ViewChild } from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Photo } from 'src/app/types/photo';

@Component({
  selector: 'app-photos-table',
  templateUrl: './photos-table.component.html',
  styleUrls: ['./photos-table.component.scss']
})
export class PhotosTableComponent implements OnInit {
photos$:Observable<Photo[]>
photosList: MatTableDataSource<Photo>;
rowPropertiesList: MatTableDataSource<Photo>;
idFilterValue: string ;
titleFilterValue: string;
displayedColumns: string[] = [
  'thumbnailUrl',
  'albumId',
  'id',
  'title',
  'actions',
 
];

@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private photos:EndPointsService) { }

  ngOnInit(): void {
  this.getAllPhotos();
  }

  getAllPhotos(){
    this.photos.getPhotos().subscribe(res =>{
      this.photosList = new MatTableDataSource(res);
      this.photosList.paginator = this.paginator;
   });
  }
  deleteRow(id:number){
    this.photos.deletePhoto(id).subscribe(
      {
        next:(res)=>{
          alert("product Delete Successfully");
          this.getAllPhotos();
        },
        error:()=>{
          alert('error')
        }
      }
    );
  }
  }

