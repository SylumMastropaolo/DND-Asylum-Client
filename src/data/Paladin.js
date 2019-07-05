var paladin = {
  name: "Paladin",
  hitDice: "1d10",
  savingThrows: [
    {
      type: "Saving Throw",
      name: "Wisdom",
      proficiencyLevel: 2
    },
    {
      type: "Saving Throw",
      name: "Charisma",
      proficiencyLevel: 2
    }
  ],
  proficiencies: [
    {
      type: "Armor",
      name: "Heavy Armor"
    },
    {
      type: "Armor",
      name: "Medium Armor"
    },
    {
      type: "Armor",
      name: "Light Armor"
    },
    {
      type: "Armor",
      name: "Shields"
    },
    {
      type: "Weapon",
      name: "Simple Weapons"
    },
    {
      type: "Weapon",
      name: "Martial Weapons"
    }
  ],
  features: [
    {
      name: "Divine Sense",
      id: 5,
      levelRequirement: 1,
      source: "Class",
      description:
        "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.",
      mods: [],
      uses: {
        // Need to make this reactive, probably won't work till I make
        // a language processor that I was planning on using for rolls
        amount: 1,
        shortRestReset: false,
        longRestReset: true
      }
    },
    {
      name: "Lay on Hands",
      id: 6,
      levelRequirement: 1,
      source: "Class",
      description:
        "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.",
      mods: [],
      uses: {
        // Need to make this reactive, probably won't work till I make
        // a language processor that I was planning on using for rolls
        amount: 5,
        shortRestReset: false,
        longRestReset: true
      }
    },
    {
      name: "Fighting Style",
      // This class feature requires the player to make a choice to determine
      // what bonuses the character gets. I should tackle this issue soon
      id: 7,
      levelRequirement: 2,
      source: "Class",
      description:
        "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.",
      mods: [],
      uses: {
        // Need to make this reactive, probably won't work till I make
        // a language processor that I was planning on using for rolls
        amount: null,
        shortRestReset: false,
        longRestReset: false
      }
    }
  ],
  choices: [
    {
      test: ""
    }
  ]
};

module.exports = paladin;
