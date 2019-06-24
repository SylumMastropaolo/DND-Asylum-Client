<template>
  <v-container>
    <v-layout row>
      <v-flex xs8>
        <div><span v-html="selectedData.htmlcontent"></span></div>
        <div>
          {{ selectedData.data }}
        </div>
      </v-flex>
      <v-flex xs4>
        <v-layout row>
          <v-text-field
            label="Search"
            v-model="searchTerms"
            single-line
          ></v-text-field>
          <v-btn @click="searchCompendium()">Search</v-btn>
        </v-layout>
        <v-list expand>
          <v-list-group
            v-for="item in sortedResults"
            :key="item.category"
            v-model="item.active"
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.category }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.value"
              @click="
                selected = subItem;
                getFromCompendium();
              "
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.value }}</v-list-tile-title>
              </v-list-tile-content>

              <!-- <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action> -->
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Compendium",
  data() {
    return {
      results: [],
      searchTerms: "",
      selected: {},
      selectedData: {}
    };
  },
  methods: {
    searchCompendium: function() {
      axios
        .get(
          "https://roll20.net/compendium/compendium/globalsearch/dnd5e?terms=" +
            this.searchTerms
        )
        .then(
          response => {
            this.results = response.data;
          },
          error => {
            console.log(error);
          }
        );
    },
    getFromCompendium: function() {
      axios
        .get(
          "https://roll20.net/compendium/dnd5e/" +
            this.selected.category +
            ":" +
            this.selected.pagename +
            ".json"
        )
        .then(
          response => {
            this.selectedData = response.data;
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  mounted() {
    this.searchCompendium();
  },
  computed: {
    sortedResults: function() {
      var sortedItems = [];
      for (var i = 0; i < this.results.length; i++) {
        var inserted = false;
        for (var j = 0; j < sortedItems.length; j++) {
          if (this.results[i].category == sortedItems[j].category) {
            sortedItems[j].items.push(this.results[i]);
            inserted = true;
            break;
          }
        }
        if (inserted == false) {
          sortedItems.push({
            category: this.results[i].category,
            items: [this.results[i]],
            active: true
          });
        }
      }
      return sortedItems;
    }
  }
};
</script>

<style></style>
