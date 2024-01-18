import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifCardListComponent } from './components/gif-card-list/gif-card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifCardListComponent,
    GifCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
