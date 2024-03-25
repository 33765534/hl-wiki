<template>
  <div id="edit"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { myQuill } from "./Quill";
import { myYjs } from "./Yjs";

onMounted(() => {
  const quill = new myQuill("#edit");

  const yjs = new myYjs(quill);
});
</script>

<style scoped></style>
