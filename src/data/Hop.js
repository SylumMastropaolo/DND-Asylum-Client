var character = {
  name: "Hop",
  profilePicLink: "https://i.imgur.com/Xgp4a2Y.png",
  race: "Halfling",
  subRace: "Lightfoot",
  baseClass: {
    name: "Paladin",
    levels: 10
  },
  hitPoints: {
    currentHitPoints: 49,
    maximumHitPoints: 74
  },
  inspiration: true,
  abilityScores: {
    miscBonus: [0, 0, 0, 0, 0, 0],
    baseScores: [8, 10, 12, 13, 14, 15],
    abilityImprovements: [0, 0, 0, 0, 0, 4], //This should be under class and be level specific to retain leveling history, it is not linked to total character level
    strength: {
      baseScore: 8,
      abilityImprovements: 0
    },
    dexterity: {
      baseScore: 10,
      abilityImprovements: 0
    },
    constitution: {
      baseScore: 12,
      abilityImprovements: 0
    },
    intelligence: {
      baseScore: 13,
      abilityImprovements: 0
    },
    wisdom: {
      baseScore: 14,
      abilityImprovements: 0
    },
    charisma: {
      baseScore: 15,
      abilityImprovements: 0
    }
  },
  savingThrows: {
    saves: [
      {
        name: "Strength",
        abbr: "STR",
        override: null,
        magicBonus: null,
        miscBonus: null,
        proficiencyLevel: 0
      },
      {
        name: "Dexterity",
        abbr: "DEX",
        override: null,
        magicBonus: null,
        miscBonus: null,
        proficiencyLevel: 0
      },
      {
        name: "Constitution",
        abbr: "CON",
        override: null,
        magicBonus: null,
        miscBonus: null,
        proficiencyLevel: 0
      },
      {
        name: "Intelligence",
        abbr: "INT",
        override: null,
        magicBonus: null,
        miscBonus: null,
        proficiencyLevel: 0
      },
      {
        name: "Wisdom",
        abbr: "WIS",
        override: null,
        magicBonus: null,
        miscBonus: null,
        proficiencyLevel: 2
      },
      {
        name: "Charisma",
        abbr: "CHA",
        override: null,
        magicBonus: null,
        miscBonus: null,
        proficiencyLevel: 2
      }
    ]
  },
  ProficienciesAndLanguages: {
    armorProficiencies: [
      {
        name: "Heavy Armor"
      },
      {
        name: "Light Armor"
      },
      {
        name: "Medium Armor"
      },
      {
        name: "Shields"
      }
    ],
    weaponProficiencies: [
      {
        name: "Martial Weapons"
      },
      {
        name: "Simple Weapons"
      }
    ],
    toolProficiencies: [
      {
        name: "Thieves Tools"
      }
    ],
    languages: [
      {
        name: "Common"
      },
      {
        name: "Elvish"
      },
      {
        name: "Halfling"
      },
      {
        name: "Orc"
      }
    ]
  }
};

module.exports = character;
