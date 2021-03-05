import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Service Loaded');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC9y68opVIc6wUb6_kNzgBuSxF7MPGzL1ReTA7CYVg-DfCSSi30oPgno1e--NIt2hBmnPun10AmTcPlSiA',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtist(termino: string) {
    return this.getQuery(`artists/${termino}`);
  }

  getArtistTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks`);
  }
}
