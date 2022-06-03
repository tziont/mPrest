import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Photo } from 'src/app/types/photo';

@Component({
  selector: 'app-photos-table',
  templateUrl: './photos-table.component.html',
  styleUrls: ['./photos-table.component.scss'],
})
export class PhotosTableComponent implements OnInit {
  @Output()
  photoEemitter = new EventEmitter<string>();
  selectedPhoto: string;
  photosList: MatTableDataSource<Photo>;
  rowPropertiesList: MatTableDataSource<Photo>;
  idFilterValue: string;
  titleFilterValue: string;
  displayedColumns: string[] = [
    'thumbnailUrl',
    'albumId',
    'id',
    'title',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private photos: EndPointsService) {}

  ngOnInit(): void {
    this.getAllPhotos();
    this.photosList.filterPredicate = function(data, filter: string): boolean {
      return data.Title.toLowerCase().includes(filter) || data.Id.toString().includes(filter) ;
  };
  }
  
  applyFilter(filterValue:string){
    this.photosList.filter = filterValue.trim().toLowerCase();
  }

  emitPhoto(photoUrl: string) {
    this.photoEemitter.emit(photoUrl);
    this.selectedPhoto = photoUrl;
  }

  getAllPhotos() {
    this.photos.getPhotos().subscribe((res) => {
      this.photosList = new MatTableDataSource(res);
      this.photosList.paginator = this.paginator;
    });
  }


  deleteRow(e: Event, photoRecord:any) {
    e.stopPropagation();
    this.photos.deletePhoto(photoRecord.id).subscribe({
      next: (res) => {
        if(photoRecord.url === this.selectedPhoto){
          this.emitPhoto('');
        }
        this.getAllPhotos();
      },
      error: () => {
        alert('error');
      },
    });
  }
}
