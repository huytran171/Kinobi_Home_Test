<template>
  <div class="d-flex flex-column">
    <v-file-input
      v-model="file"
      accept="image/*"
      label="File input"
      :rules="fileRules"
      required
    ></v-file-input>
    <v-btn
      color="primary"
      tile
      :width="200"
      :elevation="0"
      class="mt-3"
      :disabled="!file"
      @click="upload"
      >Upload</v-btn
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import fileMixin from "~/mixins/file";
export default {
  name: "BaseUploadFile",
  mixins: [fileMixin],
  data() {
    return {
      file: undefined,
    };
  },
  methods: {
    ...mapActions({
      UPLOAD: "file/UPLOAD",
      GET_ALL: "file/GET_ALL",
    }),

    async upload() {
      try {
        const form_data = new FormData();
        this.file && form_data.append("file", this.file);

        await this.UPLOAD(form_data);
        await this.GET_ALL();

        alert("File was successfully uploaded");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
