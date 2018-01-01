import {Injectable} from "@angular/core";
import {ItemBonus} from "./classes/item-bonus";
import {ItemAptitude} from "./classes/item-aptitude";
import {ItemFaculty} from "./classes/item-faculty";
import {getRndInteger} from "./utils";

@Injectable()
export class ItemService {
  private itemTypes = [
    'Arc', 'Sarbacane', 'Arbalète', 'Frondes', 'Shuriken', 'Epée une main', 'Glaive', 'Fleuret',
    'Hallebarde', 'Faux', 'Ache une main', 'Fouet', 'Filet', 'Marteau (1H)', 'Katana', 'Bô (bâton)',
    'Hache Py', 'Fil de soie', 'Hache à deux mains (guerres et batailles)', 'Epée à deux mains (guerres et batailles)',
    'Marteau à deux mains (guerres et batailles)', 'Dague', 'Griffes', 'Nunchaku', 'Corde à piano', 'Arts martiaux', 'Epée coulissante',
    'Epée ivy', 'Arc épée', 'Marteau sanglé', 'Hache sanglé', 'Krull'
  ];

  private aptitudes = [
    'Vibration sonore raisonance',
    'Onde de choc intertie',
    'Flexibilité Forme',
    'Magie',
    'Teneur'];

  private materials = {
    cuivre_bronze: {
      name: 'cuivre bronze',
      aptitudes: [1, 0, 2, 0, 3]
    }
  };

  private materialTiers = {
    tier1: [
      this.materials.cuivre_bronze
    ],
    tier2: [
      this.materials.cuivre_bronze
    ],
    tier3: [
      this.materials.cuivre_bronze
    ],
    tier4: [
      this.materials.cuivre_bronze
    ],
    tier5: [
      this.materials.cuivre_bronze
    ],
  };

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

  public getItemMaterial(tier: string): any {
    const randomIndex = getRndInteger(0, this.materialTiers[tier].length - 1);
    return this.materialTiers[tier][randomIndex];
  }

  public getItemBonus(itemLevel: number): ItemBonus {
    return new ItemBonus('Dégat', getRndInteger(0, itemLevel * 13));
  }

  public getItemAptitudes(material: any, tier): ItemAptitude[] {
    const result = [];
    let numberOfAptitudes = 0;
    if (tier === 'tier1') {
      numberOfAptitudes = 0;
    } else if (tier === 'tier2') {
      numberOfAptitudes = 1;
    } else if (tier === 'tier3') {
      numberOfAptitudes = 2;
    } else if (tier === 'tier4') {
      numberOfAptitudes = 3;
    } else if (tier === 'tier5') {
      numberOfAptitudes = 3;
    }


    const availableAptitudes = [];
    for (let i = 0; i < material.aptitudes.length; i++) {
      if (material.aptitudes[i] > 0) {
        availableAptitudes.push({aptName: this.aptitudes[i], aptValue: material.aptitudes[i]});
      }
    }

    for (let i = 0; i < numberOfAptitudes; i++) {
      const randomIndex = getRndInteger(0, availableAptitudes.length - 1);
      result.push(new ItemAptitude(availableAptitudes[randomIndex].aptName, availableAptitudes[randomIndex].aptValue));
      availableAptitudes.splice(randomIndex, 1);
    }
    return result;
  }

  public getItemFaculty(tier): ItemFaculty {
    let result = null;
    if (tier === 'tier5') {
      const randomIndex = getRndInteger(0, this.itemFaculties.length - 1);
      result =  new ItemFaculty(this.itemFaculties[randomIndex], '1 fois toutes les 3 lunes');
    }
    return result;
  }
}
