var background = {
  name: "Sage",
  skillProficiencies: [
    {
      name: "Arcana",
      proficiencyLevel: 2
    },
    {
      name: "History",
      proficiencyLevel: 2
    }
  ],
  // Still need to add languages that are selectable by choices
  features: [
    {
      name: "Researcher",
      id: 4,
      source: "Background",
      description:
        "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whome you can obtain it. Usually, this information comes form a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign."
    }
  ]
};

module.exports = background;
