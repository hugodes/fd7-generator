import { Component } from '@angular/core';
import {Item} from "./classes/item";
import {ItemService} from "./item-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {


  public lowestLevel: number;
  public highestLevel: number;
  public lowestQuality: number;
  public highestQuality: number;

  itemList: Item[];

  constructor(public itemService: ItemService) {
    this.itemList = [];
    this.highestQuality = 20;
    this.lowestQuality = 25;
  }


  public validate(): void {
    this.itemList = [];
    for (let i = 0; i < 1; i++) {
      this.itemList.push(new Item(this.itemService, this.lowestLevel, this.highestLevel, this.lowestQuality, this.highestQuality));
    }
  }
}
