<template>
  <v-card tile flat style="position: relative">
    <youtube :video-id="data.videoId" fit-parent resize/>
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
