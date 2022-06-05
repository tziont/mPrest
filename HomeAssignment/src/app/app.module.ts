import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotosTableComponent } from './components/photos-table/photos-table.component';
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShellComponent } from './components/shell/shell.component';
import { PhotoViewerComponent } from './components/photo-viewer/photo-viewer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AddPhotoDialogComponent } from './components/add-photo-dialog/add-photo-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTitleDialogComponent } from './components/edit-title-dialog/edit-title-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    PhotosTableComponent,
    ShellComponent,
    PhotoViewerComponent,
    AddPhotoDialogComponent,
    EditTitleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
