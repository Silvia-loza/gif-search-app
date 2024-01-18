import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt = '';

  public hasLoaded: boolean = false;
  ngOnInit(): void {
    if (!this.url) throw new Error('UR is required');
  }

  onLoad(): void {
    setTimeout(() => (this.hasLoaded = true), 1000);
  }
}
