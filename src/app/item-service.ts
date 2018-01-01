import {Injectable} from "@angular/core";
import {ItemBonus} from "./classes/item-bonus";
import {ItemAptitude} from "./classes/item-aptitude";
import {ItemFaculty} from "./classes/item-faculty";

@Injectable()
export class ItemService {
  private itemTypes = [
    'Arc', 'Sarbacane', 'Arbalète', 'Frondes', 'Shuriken', 'Epée une main', 'Glaive', 'Fleuret',
    'Hallebarde', 'Faux', 'Ache une main', 'Fouet', 'Filet', 'Marteau (1H)', 'Katana', 'Bô (bâton)',
    'Hache Py', 'Fil de soie', 'Hache à deux mains (guerres et batailles)', 'Epée à deux mains (guerres et batailles)',
    'Marteau à deux mains (guerres et batailles)', 'Dague', 'Griffes', 'Nunchaku', 'Corde à piano', 'Arts martiaux', 'Epée coulissante',
    'Epée ivy', 'Arc épée', 'Marteau sanglé', 'Hache sanglé', 'Krull'
  ];

  private itemMaterials = [
    'Bronze'
  ];

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
    return this.itemTypes[0];
  }

  public getItemMaterial(): string {
    return this.itemMaterials[0];
  }

  public getItemBonus(): ItemBonus {
    return new ItemBonus(this.itemBonusTypes[0], 20);
  }

  public getItemAptitude(): ItemAptitude {
    return new ItemAptitude(this.itemAptitudeNames[0], 3);
  }

  public getItemFaculty(): ItemFaculty {
    return new ItemFaculty(this.itemFaculties[0], this.itemFacutlyFrequencies[0]);
  }
}
