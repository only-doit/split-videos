<template>
  <v-card tile flat>
    <youtube :video-id="data.videoId" fit-parent resize/>
<!-- 
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
