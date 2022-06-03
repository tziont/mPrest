import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/types/photo';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  currentPhoto: string;
  constructor() {}

  ngOnInit(): void {}
  changePhotoUrl(url: string) {
    this.currentPhoto = url;
    }
}
