import { Component } from '@angular/core';
import {Item} from "./classes/item";
import {ItemService} from "./item-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  public lowestLevel: number;
  public highestLevel: number;
  public lowestQuality: number;
  public highestQuality: number;

  itemList: Item[];

  constructor(public itemService: ItemService) {
    this.itemList = [];
/*
    this.lowestLevel = 11;
    this.highestLevel = 12;
    this.highestQuality = 1;
    this.lowestQuality = 5;
*/
  }


  public validate(): void {
    if (this.highestLevel >= 0 && this.lowestLevel >= 0 && this.lowestQuality >= 0 && this.lowestQuality <= 25 && this.highestQuality >= 0 && this.highestQuality <= 25) {
      this.itemList = [];
      for (let i = 0; i < 20; i++) {
        this.itemList.push(new Item(this.itemService, this.lowestLevel, this.highestLevel, this.lowestQuality, this.highestQuality));
      }
    }
    else {
      window.alert('Le fils des septs à vu que vous n\'avez pas rempli tout les champs');
    }

  }
}
