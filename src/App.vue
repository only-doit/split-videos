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
    <v-btn
      bottom
      color="dark"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          Add new video
        </v-card-title>
        <v-card-text class="pb-0">
          <v-container class="pb-0">
            <v-row>
              <v-col cols="12" sm="9" md="9">
                <v-text-field
                  v-model="video.videoId"
                  label="Video Id"
                  prefix="https://www.youtube.com/watch?v="
                  placeholder="videoId"
                  outlined
                />
              </v-col>
              <v-col cols="12" sm="3" md="3">
                <v-select
                  v-model="video.flex"
                  :items="[3, 4, 6, 8, 12]"
                  label="Width"
                  outlined
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="pb-4 pr-4">
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Close</v-btn>
          <v-btn color="blue darken-1" :disabled="!video.videoId" text @click="add">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    dialog: false,
    video: {
      title: 'Video',
      videoId: null,
      flex: 4
    },
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

  methods: {
    add () {
      if (this.video.videoId) {
        this.cards.push(this.video)

        this.close()
      }
    },
    close () {
        this.video = {
          title: 'Video',
          videoId: null,
          flex: 4
        }

        this.dialog = false
    }
  }
};
</script>
