import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  artists:any[] = [];
  loading:boolean;

  constructor( private spotify: SpotifyService) { }

  buscar(term: string){
    this.loading = term == "" ? false : true;
    this.spotify.getArtists( term )
      .subscribe( (data: any) => {
        this.loading = false;
        this.artists = data;
      });
  };

}
