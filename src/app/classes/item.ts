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
    this.itemMaterial = this.itemService.getItemMaterial(this.getTier());
    this.itemBonus = this.itemService.getItemBonus(this.itemLevel);
    this.itemAptitudes = this.itemService.getItemAptitudes(this.itemMaterial, this.getTier());
    this.itemFaculty = this.itemService.getItemFaculty(this.getTier());
    this.itemPrice = 200;

  }

  public getTier(): string {
    let tier = '';
    if (this.itemQuality >= 0 && this.itemQuality <= 5) {
      tier = 'tier1';
    } else if (this.itemQuality >= 6 && this.itemQuality <= 10) {
      tier = 'tier2';
    } else if (this.itemQuality >= 11 && this.itemQuality <= 15) {
      tier = 'tier3';
    } else if (this.itemQuality >= 16 && this.itemQuality <= 20) {
      tier = 'tier4';
    } else if (this.itemQuality >= 21 && this.itemQuality <= 25) {
      tier = 'tier5';
    }
    return tier;
  }

}
