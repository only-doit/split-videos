<template>
  <v-app class="small-scroll">
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
    <Playlist v-model="cards" />
  </v-app>
</template>

<script>
import Tile from './components/Tile';
import Playlist from './components/Playlist';

export default {
  name: 'App',

  components: {
    Tile, Playlist
  },

  watch: {
    cards: {
      handler () {
        localStorage.setItem('cards', JSON.stringify(this.cards))
      },
      deep: true
    },
  },

  data: () => ({
    cards: [
      { title: 'Video', videoId: '21X5lGlDOfg', flex: 6 },
      { title: 'Video', videoId: 'cXX6jgeP-5I', flex: 6 },
      { title: 'Video', videoId: 'DDU-rZs-Ic4', flex: 4 },
      { title: 'Video', videoId: 'bIZsnKGV8TE', flex: 4 },
      { title: 'Video', videoId: 'hxCzpa07dvg', flex: 4 },
    ],
  }),
  created () {
    this.$vuetify.theme.dark = true

  },
  mounted () {
    if (localStorage.getItem('cards')) {
      this.cards = JSON.parse(localStorage.getItem('cards'))
    }
  }
};
</script>

<style lang="scss">
.small-scroll * {
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
      border-radius: 0;
  }
  
  &::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      border-right: solid 5px transparent;
  }
}

.theme--light.small-scroll * {
  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e09e; 
  }
}

.theme--dark.small-scroll * {
  &::-webkit-scrollbar-thumb {
    background-color: #393838; 
  }
}
</style>

