import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',

})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean = true;

  constructor( private router: ActivatedRoute,
                private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getArtista( params['id']  );
    }

    );
  }

  ngOnInit(): void {
  }

  getArtista( id: string ){

    this.spotify.getArtist( id )
      .subscribe(
        (artista) => {

          this.artista = artista;
          this.loading = false;

        },
        ( error ) => {
            console.log(error);
        }
    )
  }


  getTopTracks( id: string){
    this.spotify.getArtistTopTracks( id ).subscribe( topTracks =>vf
      )
  }
}
