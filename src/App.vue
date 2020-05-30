<template>
  <v-app>
    <v-content fluid>
      <v-row dense no-gutters>
        <v-col
          v-for="(card, i) in cards"
          :key="i"
          :cols="card.flex"
        >
          <Tile :data="card" />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Tile from './components/Tile';

export default {
  name: 'App',

  components: {
    Tile,
  },

  data: () => ({
    cards: [
      { title: 'Video', videoId: '21X5lGlDOfg', flex: 6 },
      { title: 'Video', videoId: 'cXX6jgeP-5I', flex: 6 },
      { title: 'Video', videoId: 'DDU-rZs-Ic4', flex: 4 },
      { title: 'Video', videoId: 'bIZsnKGV8TE', flex: 4 },
      { title: 'Video', videoId: 'hxCzpa07dvg', flex: 4 },
      // { title: 'Video', videoId: 'cXX6jgeP-5I', flex: 4 },
      // { title: 'Video', videoId: 'cXX6jgeP-5I', flex: 4 },
      // { title: 'Video', videoId: 'cXX6jgeP-5I', flex: 4 },
      // { title: 'Video', videoId: 'cXX6jgeP-5I', flex: 4 },
    ],
  }),

  created () {
    this.$vuetify.theme.dark = true
  }
};
</script>
