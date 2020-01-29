import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll : IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(evento){
    console.log('Cargando los siguientes datos');

    setTimeout(() => {
      
      if(this.data.length > 50){
        evento.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const newArray = Array(20);
      this.data.push(...newArray);
      evento.target.complete();

    }, 1000);
  }
}
