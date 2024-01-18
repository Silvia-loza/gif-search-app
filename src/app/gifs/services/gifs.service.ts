import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifsList: Gif[] = [];
  private _tagsHistory: string[] = []; // se crea getter para que no haya prolemas con la detección de cambios o si no quiero que se pueda mutar directamente
  private GIPHY_API_KEY = 'NyT2i23cOeXYSLjYptSvVv2xYSRq7CpX';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs/';
  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]; //Uso spread para crear una copia ya que pasan por referencia
  }
  organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag); // {this.tagsHistory.}
    }
    this._tagsHistory.unshift(tag);
    if (this._tagsHistory.length >= 10) {
      this._tagsHistory.pop();
    }
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return; //l
    this.searchTag(this._tagsHistory[0]);
  }
  searchTag(newTag: string): void {
    if (newTag.length === 0) return;
    this.organizeHistory(newTag);
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', 10)
      .set('q', newTag);

    this.httpClient
      .get<SearchResponse>(`${this.serviceUrl}search`, { params })
      .subscribe((res) => {
        this.gifsList = res.data;
        console.log('Nuestra lista gifs ', this.gifsList);
      });
  }
}
