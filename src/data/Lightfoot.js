var subRace = {
  name: "Lightfoot",
  abilityScoreBonus: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 1
  },
  features: [
    {
      name: "Naturally Stealthy",
      id: 3,
      source: "Racial",
      description:
        "You can attempt to hide even when you are obsured only by a creature that is at least one size larger than you.",
      mods: [],
      uses: {
        amount: 0,
        shortRestReset: false,
        longRestReset: false
      }
    }
  ]
};

module.exports = subRace;
