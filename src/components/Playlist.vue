<template>
  <v-dialog v-model="dialog" persistent scrollable max-width="700px">
    <template #activator="{ on }">
      <v-btn
        bottom
        color="dark"
        dark
        fab
        fixed
        right
        v-on="on"
      >
        <v-icon>mdi-buffer</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="transparent" flat>
        <v-toolbar-title>Playlist</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
      </v-card-text>
      <v-card-text class="pb-0" style="max-height: 600px">
        <v-row v-for="(video, i) of videos" :key="`video-${i}`">
          <v-col cols="12" sm="9" md="8">
            <v-text-field
              v-model="video.videoId"
              label="Video Id"
              prefix="https://www.youtube.com/watch?v="
              placeholder="videoId"
              hide-details
              outlined
            />
          </v-col>
          <v-col cols="10" sm="3" md="4">
            <v-select
              v-model="video.flex"
              :items="[2, 3, 4, 6, 8, 12]"
              label="Width"
              outlined
              hide-details
            >
              <template #append-outer>
                <v-btn style="margin-top: -8px" icon @click="remove(video)">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn text block large @click="add">
              <v-icon left>mdi-plus</v-icon>Add new video
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="pb-4 pr-4">
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Playlist',
  props: {
    value: {
      type: Array,
      default: () => ([])
    },
  },
  data: () => ({
    dialog: false,
    video: {
      title: 'Video',
      videoId: null,
      flex: 4
    }
  }),
  computed: {
    videos: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    add () {
      this.videos.push({
        title: 'Video',
        videoId: null,
        flex: 4
      })
    },
    close () {
      this.dialog = false
    },
    remove (video) {
      const index = this.videos.indexOf(video);
      if (index > -1) {
        this.videos.splice(index, 1);
      }
    }
  }
}
</script>