var exampleMod = {
  type: "Saving Throw", // Can be Saving Throw/
  bonusType: "advantage", // Advantage/Disadvantage/bonus/negative affect could change icon

  // If the bonus is a number it would be here
  amount: null,

  // For mods that don't always affect the score
  conditional: true,
  condition: "against being frightened"
};

module.exports = exampleMod;
