<template>
  <v-row>
    <v-col cols="12">
      <BaseUploadFile />
    </v-col>
    <v-col cols="12">
      <BaseListFiles />
    </v-col>
  </v-row>
</template>

<script>
import BaseUploadFile from "@/components/file/BaseUploadFile.vue";
import BaseListFiles from "@/components/file/BaseListFiles.vue";
export default {
  name: "PageFile",
  components: { BaseUploadFile, BaseListFiles },
};
</script>
