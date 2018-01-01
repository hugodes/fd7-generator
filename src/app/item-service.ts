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
      name: 'Cuivre Bronze',
        aptitudes: [0, 0, 0, 0, 0]
    },
    acier: {name: 'Acier', aptitudes: [0, 0, 0, 0, 0]},
    septembre: {name: 'Septembre', aptitudes: [0, 0, 0, 0, 0]},
    evenole: {name: 'évenole', aptitudes: [0, 1, 1, 1, 0]},
    titane: {name: 'Titane', aptitudes: [0, 2, 1, 0, 1]},
    novembre: {name: 'Novembre', aptitudes: [3, 3, 0, 0, 2]},
    plurinium: {name: 'Plurinium', aptitudes: [0, 7, 0, 1, 7]},
    adamite: {name: 'Adamite', aptitudes: [3, 5, 5, 0, 0]},
    decembre: {name: 'Décembre', aptitudes: [0, 9, 3, 0, 5]},
    cuir_chene: {name: 'Cuir, chëne', aptitudes: [0, 0, 0, 0, 0]},
    cuir_tane: {name: 'Cuir tané bois travaillé', aptitudes: [0, 0, 0, 0, 0]},
    cuir_travaille: {name: 'cuir travaillé bois sculpté', aptitudes: [0, 0, 0, 0, 0]},
    acajou: {name: 'Acajou bois rare', aptitudes: [0, 0, 1, 1, 1]},
    grafite: {name: 'grafite', aptitudes: [1, 0, 2, 1, 0]},
    carbonite: {name: 'carbonite', aptitudes: [2, 3, 3, 0, 0]},
    ossements: {name: 'Ossements', aptitudes: [7, 0, 7, 0, 1]},
    karag: {name: 'Karag', aptitudes: [0, 3, 5, 5, 0]},
    animaux_leg: {name: 'Animaux légendaire (crain de licorne ecaille de dragon); flore vivante.', aptitudes: [5, 0, 9, 3, 0]},
    magie_mat_changeante: {name: 'Magie matière changeante', aptitudes: [0, 0, 0, 0, 0]},
    magie_fumee: {name: 'Magie Fumée', aptitudes: [0, 0, 0, 0, 0]},
    magie_spectrale: {name: 'Magie spectrale', aptitudes: [0, 0, 0, 0, 0]},
    magie_elem: {name: 'Magie Elementaire', aptitudes: [1, 0, 0, 1, 1]},
    magie_invisible: {name: 'Magie invisible', aptitudes: [0, 1, 0, 2, 1]},
    magie_reves: {name: 'Magie Reves /cauchemar', aptitudes: [0, 2, 3, 3, 0]},
    magie_drag: {name: 'Magie Dragonae', aptitudes: [1, 7, 0, 7, 0]},
    magie_ombre: {name: 'Magie Ombre', aptitudes: [0, 0, 3, 5, 5]},
    magie_imagi: {name: 'Magie Imaginaire', aptitudes: [0, 5, 0, 9, 3]},
    cristal_flamme: {name: 'Cristal de flamme', aptitudes: [0, 0, 0, 0, 0]},
    cristal_mehyr: {name: 'Cristal de Mehyr', aptitudes: [0, 0, 0, 0, 0]},
    cristal_pourpre: {name: 'Cristal Pourpre', aptitudes: [0, 0, 0, 0, 0]},
    cristal_lumineux: {name: 'Cristal lumineux', aptitudes: [1, 1, 1, 0, 0]},
    cristal_clair: {name: 'Cristal clair', aptitudes: [2, 1, 0, 1, 0]},
    cristal_sang: {name: 'Cristal de sang', aptitudes: [3, 0, 0, 2, 3]},
    cristal_haine: {name: 'Cristal de haine', aptitudes: [7, 0, 1, 7, 0]},
    cristaline: {name: 'cristaline', aptitudes: [5, 5, 0, 0, 3]},
    cristal_pur: {name: 'Cristal Pur', aptitudes: [9, 3, 0, 5, 0]},
    energie_magique: {name: 'Energie magique', aptitudes: [0, 0, 0, 0, 0]},
    energie_sci: {name: 'Energie scientifique (lazer)', aptitudes: [0, 0, 0, 0, 0]},
    energie_semaca: {name: 'Energie Semaca plasma magma', aptitudes: [0, 0, 0, 0, 0]},
    energie_esprit: {name: 'Energie Esprit/ame', aptitudes: [1, 1, 0, 0, 1]},
    energie_antimatiere: {name: 'Energie Antimatière', aptitudes: [1, 0, 1, 0, 2]},
    energie_humaine: {name: 'Energie Humaine (karma)', aptitudes: [0, 0, 2, 3, 3]},
    energie_instable: {name: 'Energie instable', aptitudes: [0, 1, 7, 0, 7]},
    energie_stable: {name: 'Energie stable', aptitudes: [5, 0, 0, 3, 5]},
    energie_pure: {name: 'Energie Pure', aptitudes: [3, 0, 5, 0, 9]}

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
    'Talent Alphabétisation',
    'Talent Natation',
    'Capa Immunité au feu',
    'Capa Respiration Aqua',
    'Talent Esquive',
    'Talent Parade',
    'Talent feinte',
    'Talent riposte',
    'Talent contre attaque',
    'Talent botte secrete',
    'Talent rupture ench',
    'Talent desarmement',
    'Talent coup assomant',
    'Talent coup precis contact',
    'Talent coup precis distance',
    'Dégats fois 2 en combat de nuit',
    'Dégats fois 2 quand au max de vie',
    'Dégats fois 2 quand en dessous de 30 pdv',
    'Dégats fois 2 quand la cible est attaque par un autre',
    'Muto / Perdo Vim',
    'Muto / Perdo Objam',
    'Muto / Perdo Animal',
    'Muto / Perdo Corpem',
    'Muto / Perdo Mentem',
    'Muto / Perdo Auram',
    'Muto / Perdo Terram',
    'Muto / Perdo Aquam',
    'Muto / Perdo Fgem',
    'Muto / Perdo Gout',
    'Muto / Perdo Ouie',
    'Muto / Perdo Odorat',
    'Muto / Perdo Touché',
    'Muto / Perdo Vue',
    'Muto / Perdo Magnétisme',
    'Muto / Perdo Densité',
    'Muto / Perdo Gravité',
    'Muto / Perdo Charge',
    'Muto / Perdo Radioactivité',
    'Muto / Perdo Angoisse/degout',
    'Muto / Perdo Crainte Colére',
    'Muto / Perdo Peur',
    'Muto / Perdo Terreur Rage',
    'Muto / Perdo Larmes Enfer',
    'Muto / Perdo Mineraux',
    'Muto / Perdo Vegetaux',
    'Muto / Perdo Insectes',
    'Muto / Perdo Climats terrains',
    'Entendre/Reveiller Ombres',
    'Entendre/Reveiller Vivants',
    'Entendre/Reveiller Morts',
    'Entendre/Reveiller Esprits',
    'Entendre/Reveiller Démons',
    'Runes d\'arret/sans',
    'Runes d\'Activé/Avec',
    'Runes de Language Mémoire/connaissance',
    'Runes de Toi / vous',
    'Runes de Voir entendre',
    'Runes d\'Elements Eau',
    'Runes d\'Elements Air',
    'Runes d\'Elements Terre',
    'Runes d\'Elements Feu',
    'Runes du Grand/Maitre',
    'Runes d\'Harmonie',
    'Runes du Bien',
    'Runes du Mal',
    'Runes de la Magie',
    'Runes Preserver',
    'Runes de Moi/Nous',
    'Runes des Emotions faibles',
    'Runes du Lecteur',
    'Runes des Emotions fortes',
    'Runes des Mineraux/Flore Faune',
    'Runes de Changer/transformer',
    'Runes d\'Etre/Illusion',
    'Runes de Vie',
    'Runes de la Lumiere Jour',
    'Runes petite Mort',
    'Runes des Race/caste',
    'Runes du Moment/temps / Saison',
    'Runes de l\'Ombre /nuit',
    'Runes des Lieux',
    'Rego / Creo Vim',
    'Rego / Creo Objam',
    'Rego / Creo Animal',
    'Rego / Creo Corpem',
    'Rego / Creo Mentem',
    'Rego / Creo Auram',
    'Rego / Creo Terram',
    'Rego / Creo Aquam',
    'Rego / Creo Fgem',
    'Rego / Creo Gout',
    'Rego / Creo Ouie',
    'Rego / Creo Odorat',
    'Rego / Creo Touché',
    'Rego / Creo Vue',
    'Rego / Creo Magnétisme',
    'Rego / Creo Densité',
    'Rego / Creo Gravité',
    'Rego / Creo Charge',
    'Rego / Creo Radioactivité',
    'Rego / Creo Anguoisse Degout',
    'Rego / Creo Crainte colére',
    'Rego / Creo Peur',
    'Rego / Creo Terreur Rage',
    'Rego / Creo Larmes',
    'Soigner preserver Mineraux',
    'Soigner preserver Vegetaux',
    'Soigner preserver Insectes (Multitude)',
    'Soigner preserver Climat Terrain',
    'Corrompre/asservir Ombres',
    'Corrompre/asservir Vivants',
    'Corrompre/asservir Morts',
    'Corrompre/asservir Esprit',
    'Corrompre/asservir Démons',
    'Runes d\'Amplification',
    'Runes du mensonge',
    'Runes de la chance',
    'Runes du retour',
    'Runes du passé',
    'Runes du présent',
    'Runes de l\'avenir',
    'Incantare Vim',
    'Incantare Objam',
    'Incantare Animal',
    'Incantare Corpem',
    'Incantare Mentem',
    'Incantare Auram',
    'Incantare Terram',
    'Incantare Aquam',
    'Incantare Fgem',
    'Incantare Gout',
    'Incantare Ouie',
    'Incantare Odorat',
    'Incantare Touché',
    'Incantare Vue',
    'Incantare Magnétisme',
    'Incantare Densité',
    'Incantare Gravité',
    'Incantare Charge',
    'Incantare Radioactivté',
    'Incantare Angoisse degout',
    'Incantare Crainte Colére',
    'Incantare Peur',
    'Incantare Terreur Rage',
    'Incantare Larmes',
    'Investir Ombres',
    'Investir Vivants',
    'Investir Morts',
    'Investir Esprits',
    'Investir Démons',
    'Runes d\'immortalité',
    'Runes divine',
    'Runes des enfers',
    'Runes prophetique',
    'Runes du passage',
    'Runes de la Rune',
    'Muto/perdo Temps',
    'Muto/perdo Matiere',
    'Muto/perdo Espace',
    'Muto/perdo Antimatiere',
    'Muto/perdo Matiere / Matiére',
    'Muto/perdo Matiere / Temps',
    'Muto/perdo Matiere / Espace',
    'Muto/perdo Matiere / Antimatiére',
    'Rego/Creo Temps',
    'Rego/Creo Matiere',
    'Rego/Creo Espace',
    'Rego/Creo Antimatiere',
    'Rego/Creo Matiere / Matiére',
    'Rego/Creo Matiere / Temps',
    'Rego/Creo Matiere / Espace',
    'Rego/Creo Matiere / Antimatiére'

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
      if (availableAptitudes.length > 0) {
        const randomIndex = getRndInteger(0, availableAptitudes.length - 1)
        result.push(new ItemAptitude(availableAptitudes[randomIndex].aptName, availableAptitudes[randomIndex].aptValue));
        availableAptitudes.splice(randomIndex, 1);
      }
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
