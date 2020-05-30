<template>
  <v-card tile flat color="transparent" style="position: relative">
    <youtube ref="video" :video-id="data.videoId" fit-parent resize />
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
  },
  watch: {
    data: {
      handler () {
        this.$refs.video.resizeProportionally()
      },
      deep: true
    }
  }
}
</script>
