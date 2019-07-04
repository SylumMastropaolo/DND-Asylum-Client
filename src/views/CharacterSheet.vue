<template>
  <v-container grid-list-md>
    {{ test }}
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
        <h4>
          <span v-if="subRace.name != null">{{ subRace.name }} </span
          >{{ race.name }} {{ baseClass.name }}
        </h4>
        <h5>Level: {{ levelTotal }}</h5>
      </v-flex>
    </v-layout>
    <v-layout row wrap
      ><!-- Row 2 -->
      <v-flex xs12 tag="h1">
        Ability Scores
      </v-flex>
      <v-flex xs1 v-for="score in abilityScores" v-bind:key="score.name">
        {{ score.name }}
        <ul>
          <li>Total: {{ score.total }}</li>
          <li>Mod: {{ score.mod }}</li>
          <li>Base Score: {{ score.baseScore }}</li>
          <li>Racial Bonus: {{ score.racialBonus }}</li>
          <li>Sub Racial Bonus: {{ score.subRacialBonus }}</li>
          <li>Ability Improvements: {{ score.abilityImprovements }}</li>
          <li>Misc Bonus: {{ score.miscBonus }}</li>
          <li>Stacking Bonus: {{ score.stackingBonus }}</li>
          <li>Set Score: {{ score.setScore }}</li>
          <li>Other Modifier: {{ score.otherModifier }}</li>
          <li>Override Score: {{ score.overrideScore }}</li>
        </ul>
      </v-flex>
      <v-flex xs1>
        <h3>Proficiency Bonus: {{ proficiencyBonus }}</h3>
      </v-flex>
      <v-flex xs1>
        <h3>Speed: {{ speed.walking }}</h3>
      </v-flex>
      <v-flex xs1>
        <h3>Inspiration: {{ this.character.inspiration }}</h3>
      </v-flex>
      <v-flex xs3>
        <h3>
          Hit Points: {{ this.character.hitPoints.currentHitPoints }} /
          {{ this.character.hitPoints.maximumHitPoints }}
        </h3>
      </v-flex>
    </v-layout>
    <v-layout row
      ><!-- Row 3 -->
      <v-flex xs3>
        <v-layout column>
          <div>
            <h1>
              Saving Throws
            </h1>
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
            <h3 v-for="mod in savingThrowMods" v-bind:key="mod.id">
              <span>{{ mod.bonusType }}</span>
              <span v-if="mod.bonusType == 'bonus'">{{ mod }}</span>
              <span v-if="mod.conditional == true"> {{ mod.condition }}</span>
            </h3>
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
          <h1>Skills</h1>
          <div v-for="skill in skills" v-bind:key="skill.name">
            {{ skill.stat }} {{ skill.name }} {{ skill.mod }}
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-layout row wrap>
          <v-flex xs3>
            <h3>Initiative: {{ initiative }}</h3>
          </v-flex>
          <v-flex xs3>
            <h3>Armor Class: {{ armorClass }}</h3>
          </v-flex>
          <v-flex xs6>
            Defenses and Conditions
          </v-flex>
          <v-flex xs12>
            <v-tabs v-model="activeTab">
              <v-tab v-for="tab in tabs" v-bind:key="tab"> {{ tab }}</v-tab>
              <v-tabs-items>
                <v-tab-item>
                  <v-card>Actions</v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card>Spells</v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card>Equipment</v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card>
                    <v-container grid-list-sm>
                      <v-layout column>
                        <h2>
                          Class Features
                        </h2>
                        <v-divider></v-divider>
                        <v-flex
                          v-for="feature in classFeatures"
                          v-bind:key="feature.name"
                        >
                          <h3>{{ feature.name }}</h3>
                          {{ feature.description }}
                        </v-flex>
                        <h2>
                          Racial Traits
                        </h2>
                        <v-divider></v-divider>
                        <div
                          v-for="trait in racialTraits"
                          v-bind:key="trait.name"
                        >
                          <h3>{{ trait.name }}</h3>
                          {{ trait.description }}
                        </div>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card>Description</v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card>Notes</v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card>Extras</v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//import axios from "axios";
import hop from "../data/Hop.js";
import halfling from "../data/Halfling.js";
import lightfoot from "../data/Lightfoot.js";
import skillsImport from "../data/skills.js";
import paladin from "../data/Paladin.js";

export default {
  name: "CharacterSheet",
  data() {
    return {
      test: null,
      character: hop,
      race: halfling,
      subRace: lightfoot,
      baseClass: paladin,
      skillsList: skillsImport,
      activeTab: 3,
      tabs: [
        "Actions",
        "Spells",
        "Equipment",
        "Features & Traits",
        "Description",
        "Notes",
        "Extras"
      ]
    };
  },
  methods: {
    calculateAbilityTotal: function(data) {
      var total = 0;
      for (var i = 0; i < 8; i++) {
        total += Number(data[i]);
      }

      // Check to see if there's a value for override score
      if (data[8] == null) {
        return total;
      } else {
        return data[8];
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
        subRacialBonus: data[2],
        abilityImprovements: data[3],
        miscBonus: data[4],
        stackingBonus: data[5],
        setScore: data[6],
        otherModifier: data[7],
        overrideScore: data[8]
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
        this.race.abilityScoreBonus.strength,
        this.subRace.abilityScoreBonus.strength,
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
        this.race.abilityScoreBonus.dexterity,
        this.subRace.abilityScoreBonus.dexterity,
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
        this.race.abilityScoreBonus.constitution,
        this.subRace.abilityScoreBonus.constitution,
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
        this.race.abilityScoreBonus.intelligence,
        this.subRace.abilityScoreBonus.intelligence,
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
        this.race.abilityScoreBonus.wisdom,
        this.subRace.abilityScoreBonus.wisdom,
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
        this.race.abilityScoreBonus.charisma,
        this.subRace.abilityScoreBonus.charisma,
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
      return 1 + Math.ceil(this.levelTotal / 4);
    },
    levelTotal: function() {
      // Will add total levels from all class levels
      // Becomes useful when multiclassing
      return Number(this.character.baseClass.levels);
    },
    speed: function() {
      // Needs to account for class features, status effects, etc.
      return this.race.speed;
    },
    initiative: function() {
      return this.dexterity.mod;
    },
    armorClass: function() {
      return 10 + this.dexterity.mod;
      // Examples to consider during development
      //
      // No Armour: Base AC = 10 + Dexterity modifier
      // Leather Armour: Base AC = 11 + Dexterity modifier
      // Chain Shirt: Base AC = 13 + Dexterity modifier (max +2)
      // Plate Mail: Base AC = 18
      // Mage Armour spell: Base AC = 13 + Dexterity modifier
      // Barbarian Unarmoured Defense
      // ability: Base AC = 10 + Dexterity modifier + Constitution modifier
      // Monk Unarmoured Defense ability: Base AC = 10 + Dexterity modifier + Wisdom modifier
      // Sorcerer Draconic Resilience ability: Base AC = 13 + Dexterity modifier
    },
    mods: function() {
      var mods = [];

      // Add mods from racial features
      for (var i = 0; i < this.race.features.length; i++) {
        for (var j = 0; j < this.race.features[i].mods.length; j++) {
          mods.push(this.race.features[i].mods[j]);
        }
      }

      // Add mods from sub racial features
      for (var k = 0; k < this.subRace.features.length; k++) {
        for (var l = 0; l < this.subRace.features[k].mods.length; l++) {
          mods.push(this.subRace.features[k].mods[l]);
        }
      }

      return mods;
    },
    savingThrowMods: function() {
      // Finds all saving throw mods and places into one array
      var savingMods = [];

      for (var i = 0; i < this.mods.length; i++) {
        if (this.mods[i].type == "Saving Throw") {
          savingMods.push(this.mods[i]);
        }
      }

      return savingMods;
    },
    racialTraits: function() {
      var racials = [];

      for (var i = 0; i < this.race.features.length; i++) {
        racials.push(this.race.features[i]);
      }
      if (this.subRace != null) {
        for (var j = 0; j < this.subRace.features.length; j++) {
          racials.push(this.subRace.features[j]);
        }
      }

      return racials;
    },
    classFeatures: function() {
      var features = [];

      for (var i = 0; i < this.baseClass.features.length; i++) {
        if (
          this.baseClass.features[i].levelRequirement <=
          this.character.baseClass.levels
        ) {
          features.push(this.baseClass.features[i]);
        }
      }

      return features;
    }
  }
};
</script>

<style></style>
