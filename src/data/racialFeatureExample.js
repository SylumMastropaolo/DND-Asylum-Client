var feature = {
  name: "Lucky", // Name of feature
  description:
    "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",

  // You can include mods within the features that can affect other properties
  mods: [],

  uses: {
    // This section is for skills that have a limit on uses
    amount: 0,

    // Will add a feature that will auto reset these on rests
    shortRestReset: false,
    longRestReset: false
  }
};

module.exports = feature;

/*
For copy and paste purposes

{
  name: "",
  description: "",
  mods: [],
  uses: {
    amount: 0,
    shortRestReset: false,
    longRestReset: false
  }
}

*/
