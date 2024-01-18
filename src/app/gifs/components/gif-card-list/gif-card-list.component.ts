import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-card-list',
  templateUrl: './gif-card-list.component.html',
  styleUrl: './gif-card-list.component.scss',
})
export class GifCardListComponent {
  @Input()
  giftList: Gif[] = [];
}
