import { Component,  OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { EndPointsService } from 'src/app/services/end-points.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.scss']
})
export class AddPhotoDialogComponent implements OnInit {
photosRecordForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private photos: EndPointsService,
    private dialogRef: MatDialogRef<AddPhotoDialogComponent>
) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.photosRecordForm = this.formBuilder.group({
      id:[''],
      title:[''],
      albumId:[''],
      url:[''],
      thumbnailUrl:[''],
    })
  }
  addPhotoRecord(){
    if(this.photosRecordForm.valid){
      this.photos.postPhoto(this.photosRecordForm.value)
      .subscribe({
        next:(res)=>{
        alert("added successfuly");
        this.dialogRef.close();
      },
    })
    }
  }
}
