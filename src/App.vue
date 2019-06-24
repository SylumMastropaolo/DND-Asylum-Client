<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <!-- <span>Vuetify</span> -->
        <span class="font-weight-light">D&D Asylum</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat class="mr-2" @click="$router.push('charactersheet')">
        Character Sheet
      </v-btn>
      <v-btn flat class="mr-2" @click="$router.push('compendium')">
        Compendium
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
