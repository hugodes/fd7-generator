import {Injectable} from "@angular/core";
import {ItemBonus} from "./classes/item-bonus";
import {ItemAptitude} from "./classes/item-aptitude";
import {ItemFaculty} from "./classes/item-faculty";
import {getRndInteger} from "./utils";

@Injectable()
export class ItemService {
  private itemTypes = [
    'Epée'
  ];

  private itemMaterials = {
    tier1: ['Cuivre bronze'],
    tier2: ['Septembre'],
    tier3: ['Titane'],
    tier4: ['Novembre'],
    tier5: ['Adamite']
  };
  private itemBonusTypes = [
    'Bonus proba'
  ];

  private itemAptitudeNames = [
    'Slot magique'
  ];

  private itemFaculties = [
    'Muto / perdo vim'
  ];

  private itemFacutlyFrequencies = [
    '1 fois toute les 3 lunes'
  ];




  public getItemType(): string {
    const randomIndex = getRndInteger(0, this.itemTypes.length - 1);
    return this.itemTypes[randomIndex];
  }

  public getItemMaterial(itemQuality): string {
    let tier = '';
    if (itemQuality >= 0 && itemQuality <= 5) {
      tier = 'tier1';
    } else if (itemQuality >= 6 && itemQuality <= 10) {
      tier = 'tier2';
    } else if (itemQuality >= 11 && itemQuality <= 15) {
      tier = 'tier3';
    } else if (itemQuality >= 16 && itemQuality <= 20) {
      tier = 'tier4';
    } else if (itemQuality >= 21 && itemQuality <= 25) {
      tier = 'tier5';
    }
    const randomIndex = getRndInteger(0, this.itemMaterials[tier].length - 1);
    return this.itemMaterials[tier][randomIndex];
  }

  public getItemBonus(itemLevel: number): ItemBonus {
    return new ItemBonus('Dégat', getRndInteger(0, itemLevel * 13));
  }

  public getItemAptitude(): ItemAptitude {
    return new ItemAptitude(this.itemAptitudeNames[0], 3);
  }

  public getItemFaculty(): ItemFaculty {
    return new ItemFaculty(this.itemFaculties[0], this.itemFacutlyFrequencies[0]);
  }
}
