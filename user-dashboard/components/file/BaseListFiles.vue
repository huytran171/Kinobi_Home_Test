<template>
  <v-row>
    <v-col v-for="file in files" :key="file._id" cols="12" class="divider">
      <v-row class="text-body-2 d-flex primary--text">
        <v-col cols="12" sm="3">
          <span>{{ file.file?.originalname }}</span>
        </v-col>
        <v-col cols="12" sm="3">
          <span> {{ file.file?.mimetype }}</span>
        </v-col>
        <v-col cols="12" sm="3">
          <span> {{ file.file?.size }} KB </span>
        </v-col>
        <v-col cols="12" sm="3">
          <a :href="file.file?.location">link</a>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BaseListFiles",
  data() {
    return {
      file: undefined,
    };
  },
  computed: {
    ...mapGetters({
      files: "file/files",
    }),
  },
  async fetch() {
    try {
      await this.GET_ALL();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    ...mapActions({
      GET_ALL: "file/GET_ALL",
    }),
  },
};
</script>

<style scoped>
.divider {
  margin-top: 5px;
  border-bottom: 1px solid black;
}
</style>
