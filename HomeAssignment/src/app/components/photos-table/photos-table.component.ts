import {
  Component,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { EndPointsService } from 'src/app/services/end-points.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Photo } from 'src/app/types/photo';
import { AddPhotoDialogComponent } from '../add-photo-dialog/add-photo-dialog.component';
import { EditTitleDialogComponent } from '../edit-title-dialog/edit-title-dialog.component';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private photos: EndPointsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllPhotos();
    this.createCustomFiltering();
  }

  createCustomFiltering() {
    if (this.photosList) {
      this.photosList.filterPredicate = function (
        data,
        filter: string
      ): boolean {
        return (
          data.Title.toLowerCase().includes(filter) ||
          data.Id.toString().includes(filter)
        );
      };
    }
  }
  applyFilter(filterValue: string) {
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
  openAddPhotoDialog() {
    const dialogRef = this.dialog.open(AddPhotoDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllPhotos();
    });
  }

  openEditDialog(row: Photo) {
    const dialogRef = this.dialog.open(EditTitleDialogComponent, {
      width: '400px',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllPhotos();
    });
  }

  deleteRow(e: Event, photoRecord: any) {
    e.stopPropagation();
    this.photos.deletePhoto(photoRecord.id).subscribe({
      next: (res) => {
        if (photoRecord.url === this.selectedPhoto) {
          this.emitPhoto('');
        }
        this.getAllPhotos();
      },
    });
  }
}
