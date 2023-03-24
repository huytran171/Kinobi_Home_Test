<template>
  <v-row>
    <BaseListItem v-for="file in files" :key="file._id" :data="file.file" />
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseListItem from "@/components/file/BaseListItem.vue";
export default {
  name: "BaseListFiles",
  components: { BaseListItem },
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
