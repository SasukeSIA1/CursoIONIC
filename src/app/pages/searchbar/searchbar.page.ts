import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumnes: any[] = [];
  textoBuscar = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getAlbums()
    .subscribe( albumnes =>{
      this.albumnes = albumnes;
      //console.log(albumnes);
    });

  }

  buscar(event){    
    this.textoBuscar = event.detail.value;
  }
}
