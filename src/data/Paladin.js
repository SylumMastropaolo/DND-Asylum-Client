var paladin = {
  name: "Paladin",
  features: [
    {
      name: "Divine Sense",
      id: 5,
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
    }
  ]
};

module.exports = paladin;
