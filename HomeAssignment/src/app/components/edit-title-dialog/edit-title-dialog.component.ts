import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { EndPointsService } from 'src/app/services/end-points.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-title-dialog',
  templateUrl: './edit-title-dialog.component.html',
  styleUrls: ['./edit-title-dialog.component.scss'],
})
export class EditTitleDialogComponent implements OnInit {
  editTitleForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private photos: EndPointsService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<EditTitleDialogComponent>
  ) {}

  ngOnInit(): void {
    this.createForm();
    if (this.editData) {
      this.editTitleForm.controls['id'].setValue(this.editData.id);
      this.editTitleForm.controls['title'].setValue(this.editData.title);
      this.editTitleForm.controls['url'].setValue(this.editData.url);
      this.editTitleForm.controls['thumbnailUrl'].setValue(
        this.editData.thumbnailUrl
      );
    }
  }
  createForm() {
    this.editTitleForm = this.formBuilder.group({
      id: [''],
      title: [''],
      url: [''],
      thumbnailUrl: [''],
    });
  }
  close() {
    this.dialogRef.close();
  }
  saveTitle() {
    if (this.editTitleForm.valid) {
      this.photos
        .putPhoto(this.editTitleForm.value, this.editData.id)
        .subscribe({
          next: (res) => {
            this.close();
          },
        });
    }
  }
}
