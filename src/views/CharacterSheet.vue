<template>
  <v-container>
    <v-layout row>
      <v-flex xs1></v-flex>
      <v-flex xs10>
        <div>Test: {{ proficiencyBonus }}</div>

        <div>Name: {{ character.name }}</div>

        <div>
          <v-layout row wrap>
            <v-flex xs12 offset-1 tag="h2">
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
              </ul>
            </v-flex>
          </v-layout>
        </div>

        <div>
          <h2>
            Saving Throws
          </h2>
          <v-layout col>
            <v-flex
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
      </v-flex>
      <v-flex xs1></v-flex>
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
        level: 8,
        abilityScores: {
          miscBonus: [0, 0, 0, 0, 0, 0],
          baseScores: [8, 10, 12, 13, 14, 15],
          abilityImprovements: [0, 0, 0, 0, 0, 4] //This should be under class and be level specific to retain leveling history, it is not linked to total character level
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
          abilityScoreBonus: [0, 2, 0, 0, 0, 0]
        }
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
  methods: {},
  mounted() {},
  computed: {
    abilityScores: function() {
      var scores = [];
      var characterData = this.character.abilityScores;
      for (var i = 0; i < this.abilityScoresList.length; i++) {
        var score = {
          name: this.abilityScoresList[i].name,
          abbr: this.abilityScoresList[i].abbr,
          miscBonus: characterData.miscBonus[i],
          baseScore: characterData.baseScores[i],
          abilityImprovements: characterData.abilityImprovements[i],
          racialBonus: this.race.data.abilityScoreBonus[i],
          total:
            characterData.miscBonus[i] +
            characterData.baseScores[i] +
            characterData.abilityImprovements[i] +
            this.race.data.abilityScoreBonus[i],
          mod:
            Math.floor(
              (characterData.miscBonus[i] +
                characterData.baseScores[i] +
                characterData.abilityImprovements[i] +
                this.race.data.abilityScoreBonus[i]) /
                2
            ) - 5
        };
        scores.push(score);
      }
      return scores;
    },
    proficiencyBonus: function() {
      return 1 + Math.ceil(this.character.level / 4);
    }
  }
};
</script>

<style></style>
