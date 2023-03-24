<template>
  <v-col cols="12" class="divider">
    <v-row class="text-body-2 d-flex primary--text">
      <v-col cols="12" sm="3">
        <span class="text--ellipsis">{{ data.originalname }}</span>
      </v-col>
      <v-col cols="12" sm="3">
        <span> {{ data.mimetype }}</span>
      </v-col>
      <v-col cols="12" sm="3">
        <span> {{ data.size }} KB </span>
      </v-col>
      <v-col cols="12" sm="3">
        <a :href="data.location">link</a>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "BaseListItem",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.text--ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
