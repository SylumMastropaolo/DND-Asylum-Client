var race = {
  name: "Halfling",
  size: "Small",
  speed: {
    walking: 25,
    flying: null
  },
  abilityScoreBonus: {
    strength: 0,
    dexterity: 2,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0
  },
  languages: ["Common", "Halfling"],
  features: [
    {
      name: "Lucky",
      id: 0,
      source: "Racial",
      description:
        "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
      mods: [],
      uses: {
        amount: null,
        shortRestReset: false,
        longRestReset: false
      }
    },
    {
      name: "Brave",
      id: 1,
      source: "Racial",
      description:
        "You have advantage on saving throws against being frightened",
      mods: [
        {
          type: "Saving Throw",
          bonusType: "advantage",
          amount: null,
          conditional: true,
          condition: "against being frightened"
        }
      ],
      uses: {
        amount: null,
        shortRestReset: false,
        longRestReset: false
      }
    },
    {
      name: "Halfling Nimbleness",
      id: 2,
      source: "Racial",
      description:
        "You can move through the space of any creature that is of a size larger than yours.",
      mods: [],
      uses: {
        amount: null,
        shortRestReset: false,
        longRestReset: false
      }
    }
  ]
};

module.exports = race;
