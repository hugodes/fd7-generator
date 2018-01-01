import {ItemAptitude} from "./item-aptitude";
import {ItemFaculty} from "./item-faculty";
import {ItemService} from "../item-service";
import {ItemBonus} from "./item-bonus";
import {getRndInteger} from "../utils";

export class Item {

  public itemLevel: number;
  public itemQuality: number;
  public itemType: string;
  public itemMaterial: string;
  public itemBonus: ItemBonus;
  public itemAptitudes: Array<ItemAptitude>;
  public itemFaculty: ItemFaculty;
  public itemPrice: number;

  constructor(public itemService: ItemService, lowestLevel: number, highestLevel: number, lowestQuality: number, highestQuality: number) {
    this.itemLevel = getRndInteger(lowestLevel, highestLevel);
    this.itemQuality = getRndInteger(lowestQuality, highestQuality);

    this.itemType = this.itemService.getItemType();
    this.itemMaterial = this.itemService.getItemMaterial(this.itemQuality);
    this.itemBonus = this.itemService.getItemBonus(this.itemLevel);
    this.itemAptitudes = [];
    for (let i = 0; i < 3; i++) {
      this.itemAptitudes.push(this.itemService.getItemAptitude());
    }
    this.itemFaculty = this.itemService.getItemFaculty();
    this.itemPrice = 200;

  }

}
