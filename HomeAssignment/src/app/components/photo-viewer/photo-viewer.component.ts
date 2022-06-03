import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent implements OnInit {
  @Input()
  currentPhoto: string;
  constructor() {}

  ngOnInit(): void {}
}
