<template>
  <v-container grid-list-md>
    <v-layout row
      ><!-- Row 1 -->
      <v-flex shrink>
        <v-img
          :src="character.profilePicLink"
          height="75"
          width="75"
          contain
        ></v-img>
      </v-flex>
      <v-flex>
        <h3>Name: {{ character.name }}</h3>
        <h4>{{ race.name }} {{ baseClass.name }} {{ level }}</h4>
        <h5>Level: {{ character.level }}</h5>
      </v-flex>
    </v-layout>
    <v-layout row wrap
      ><!-- Row 2 -->
      <v-flex xs12 tag="h2">
        Ability Scores
      </v-flex>
      <v-flex xs2 v-for="score in abilityScores" v-bind:key="score.name">
        {{ score.name }}
        <ul>
          <li>Total: {{ score.total }}</li>
          <li>Mod: {{ score.mod }}</li>
          <li>Base Score: {{ score.baseScore }}</li>
          <li>Racial Bonus: {{ score.racialBonus }}</li>
          <li>Ability Improvements: {{ score.abilityImprovements }}</li>
          <li>Misc Bonus: {{ score.miscBonus }}</li>
          <li>Stacking Bonus: {{ score.stackingBonus }}</li>
          <li>Set Score: {{ score.setScore }}</li>
          <li>Other Modifier: {{ score.otherModifier }}</li>
          <li>Override Score: {{ score.overrideScore }}</li>
        </ul>
      </v-flex>
    </v-layout>
    <v-layout row
      ><!-- Row 3 -->
      <v-flex xs3>
        <v-layout column>
          <div>
            <h2>
              Saving Throws
            </h2>
            <v-layout row wrap>
              <v-flex
                xs4
                v-for="save in character.savingThrows.saves"
                v-bind:key="save.name"
              >
                {{ save.name }}
                <ul>
                  <li>Save Proficiency: {{ save.proficiencyLevel }}</li>
                  <li>Save Override: {{ save.override }}</li>
                  <li>Save Magic Bonus: {{ save.magicBonus }}</li>
                  <li>Save Misc Bonus: {{ save.miscBonus }}</li>
                </ul>
              </v-flex>
            </v-layout>
          </div>

          <div>
            <h1>Proficiencies And Languages</h1>
          </div>

          <div>
            <h2>
              Armor Proficiencies
            </h2>
            <div
              v-for="armor in character.ProficienciesAndLanguages
                .armorProficiencies"
              v-bind:key="armor.name"
            >
              <ul>
                <li>{{ armor.name }}</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>
              Weapon Proficiencies
            </h2>
            <div
              v-for="weapon in character.ProficienciesAndLanguages
                .weaponProficiencies"
              v-bind:key="weapon.name"
            >
              <ul>
                <li>{{ weapon.name }}</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>
              Tool Proficiencies
            </h2>
            <div
              v-for="tool in character.ProficienciesAndLanguages
                .toolProficiencies"
              v-bind:key="tool.name"
            >
              <ul>
                <li>{{ tool.name }}</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>
              Languages
            </h2>
            <div
              v-for="language in character.ProficienciesAndLanguages.languages"
              v-bind:key="language.name"
            >
              <ul>
                <li>{{ language.name }}</li>
              </ul>
            </div>
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs3>
        <v-layout column>
          <h2>Skills</h2>
          <ul>
            <li v-for="skill in skills" v-bind:key="skill.name">
              {{ skill.name }}
              <ul>
                <li>
                  {{ skill.stat }}
                </li>
                <li>
                  {{ skill.mod }}
                </li>
              </ul>
            </li>
          </ul>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs3>
            Initiative
          </v-flex>
          <v-flex xs3>
            Armor Class
          </v-flex>
          <v-flex xs6>
            Deffenses and Conditions
          </v-flex>
          <v-flex xs12>
            Big thingy where all actions and spells and stuff go
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//import axios from "axios";

export default {
  name: "CharacterSheet",
  data() {
    return {
      character: {
        name: "Hop",
        profilePicLink: "https://i.imgur.com/Xgp4a2Y.png",
        baseClass: {
          name: "Paladin",
          levels: "10"
        },
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
      },
      race: {
        name: "Halfling",
        data: {
          size: "Small",
          speed: "25",
          // abilityScoreBonus: [0, 2, 0, 0, 0, 0],
          abilityScoreBonus: {
            strength: 0,
            dexterity: 2,
            constitution: 0,
            wisdom: 0,
            intelligence: 0,
            charisma: 0
          }
        }
      },
      baseClass: {
        name: "Paladin",
        level: 10
      },
      skillsList: [
        {
          name: "Acrobatics",
          stat: "DEX"
        },
        {
          name: "Animal Handling",
          stat: "WIS"
        },
        {
          name: "Arcana",
          stat: "INT"
        },
        {
          name: "Athletics",
          stat: "STR"
        },
        {
          name: "Deception",
          stat: "CHA"
        },
        {
          name: "History",
          stat: "INT"
        },
        {
          name: "Insight",
          stat: "WIS"
        },
        {
          name: "Intimidation",
          stat: "CHA"
        },
        {
          name: "Investigation",
          stat: "INT"
        },
        {
          name: "Medicine",
          stat: "WIS"
        },
        {
          name: "Nature",
          stat: "INT"
        },
        {
          name: "Perception",
          stat: "WIS"
        },
        {
          name: "Performance",
          stat: "CHA"
        },
        {
          name: "Persuasion",
          stat: "CHA"
        },
        {
          name: "Religion",
          stat: "INT"
        },
        {
          name: "Sleight of Hand",
          stat: "DEX"
        },
        {
          name: "Stealth",
          stat: "DEX"
        },
        {
          name: "Survival",
          stat: "WIS"
        }
      ],
      abilityScoresList: [
        {
          name: "Strength",
          abbr: "STR"
        },
        {
          name: "Dexterity",
          abbr: "DEX"
        },
        {
          name: "Constitution",
          abbr: "CON"
        },
        {
          name: "Inteligence",
          abbr: "INT"
        },
        {
          name: "Wisdom",
          abbr: "WIS"
        },
        {
          name: "Charisma",
          abbr: "CHA"
        }
      ]
    };
  },
  methods: {
    calculateAbilityTotal: function(data) {
      var total = 0;
      for (var i = 0; i < 7; i++) {
        total += Number(data[i]);
      }

      // Check to see if there's a value for override score
      if (data[7] == null) {
        return total;
      } else {
        return data[7];
      }
    },
    calculateAbilityMod: function(values) {
      return Math.floor(this.calculateAbilityTotal(values) / 2 - 5);
    },
    calculateAbilityScore: function(name, abbr, data) {
      return {
        name: name,
        abbr: abbr,
        total: this.calculateAbilityTotal(data),
        mod: this.calculateAbilityMod(data),
        baseScore: data[0],
        racialBonus: data[1],
        abilityImprovements: data[2],
        miscBonus: data[3],
        stackingBonus: data[4],
        setScore: data[5],
        otherModifier: data[6],
        overrideScore: data[7]
      };
      // Data should be an array with values in the following order
      //   Base score, racial bonus, ability improvements,
      //   misc bonus, stacking bonus, set score, other modifier, override score
    }
  },
  mounted() {},
  computed: {
    strength: function() {
      return this.calculateAbilityScore("Strength", "STR", [
        this.character.abilityScores.strength.baseScore,
        this.race.data.abilityScoreBonus.strength,
        this.character.abilityScores.strength.abilityImprovements,
        0, // Misc bonus
        0, // Stacking bonus
        0, // Set score

        null, // Other modifier
        null // Override Score
      ]);
    },
    dexterity: function() {
      return this.calculateAbilityScore("Dexterity", "DEX", [
        this.character.abilityScores.dexterity.baseScore,
        this.race.data.abilityScoreBonus.dexterity,
        this.character.abilityScores.dexterity.abilityImprovements,
        0, // Misc bonus
        0, // Stacking bonus
        0, // Set score

        null, // Other modifier
        null // Override Score
      ]);
    },
    constitution: function() {
      return this.calculateAbilityScore("Constitution", "CON", [
        this.character.abilityScores.constitution.baseScore,
        this.race.data.abilityScoreBonus.constitution,
        this.character.abilityScores.constitution.abilityImprovements,
        0, // Misc bonus
        0, // Stacking bonus
        0, // Set score

        null, // Other modifier
        null // Override Score
      ]);
    },
    intelligence: function() {
      return this.calculateAbilityScore("Intelligence", "INT", [
        this.character.abilityScores.intelligence.baseScore,
        this.race.data.abilityScoreBonus.intelligence,
        this.character.abilityScores.intelligence.abilityImprovements,
        0, // Misc bonus
        0, // Stacking bonus
        0, // Set score

        null, // Other modifier
        null // Override Score
      ]);
    },
    wisdom: function() {
      return this.calculateAbilityScore("Wisdom", "WIS", [
        this.character.abilityScores.wisdom.baseScore,
        this.race.data.abilityScoreBonus.wisdom,
        this.character.abilityScores.wisdom.abilityImprovements,
        0, // Misc bonus
        0, // Stacking bonus
        0, // Set score

        null, // Other modifier
        null // Override Score
      ]);
    },
    charisma: function() {
      return this.calculateAbilityScore("Charisma", "CHA", [
        this.character.abilityScores.charisma.baseScore,
        this.race.data.abilityScoreBonus.charisma,
        this.character.abilityScores.charisma.abilityImprovements,
        0, // Misc bonus
        0, // Stacking bonus
        0, // Set score

        null, // Other modifier
        null // Override Score
      ]);
    },
    abilityScores: function() {
      return [
        this.strength,
        this.dexterity,
        this.constitution,
        this.intelligence,
        this.wisdom,
        this.charisma
      ];
    },
    skills: function() {
      var skills = [];
      for (var i = 0; i < this.skillsList.length; i++) {
        var name = this.skillsList[i].name;
        var stat = this.skillsList[i].stat;
        var mod;
        for (var j = 0; j < this.abilityScores.length; j++) {
          if (this.skillsList[i].stat == this.abilityScores[j].abbr) {
            mod = Number(this.abilityScores[j].mod);
          }
        }

        var skill = {
          name: name,
          stat: stat,
          mod: mod
        };
        skills.push(skill);
      }
      return skills;
    },
    proficiencyBonus: function() {
      return 1 + Math.ceil(this.character.level / 4);
    },
    level: function() {
      return Number(this.character.baseClass.levels);
    }
  }
};
</script>

<style></style>
