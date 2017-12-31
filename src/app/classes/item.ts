import {ItemAptitude} from "./item-aptitude";
import {ItemFaculty} from "./item-faculty";
import {ItemService} from "../item-service";
import {ItemBonus} from "./item-bonus";

export class Item {

  public itemLevel: number;
  public itemQuality: number;
  public itemType: string;
  public itemMaterial: string;
  public itemBonus: ItemBonus;
  public itemAptitudes: Array<ItemAptitude>;
  public itemFaculty: ItemFaculty;
  public itemPrice: number;

  constructor(public itemService: ItemService) {
    this.itemLevel = 20;
    this.itemQuality = 20;
    this.itemType = this.itemService.getItemType();
    this.itemMaterial = this.itemService.getItemMaterial();
    this.itemBonus = this.itemService.getItemBonus();
    this.itemAptitudes = [];
    for (let i = 0; i < 3; i++) {
      this.itemAptitudes.push(this.itemService.getItemAptitude());
    }
    this.itemFaculty = this.itemService.getItemFaculty();
    this.itemPrice = 200;

  }

}
