<template>
  <div>
    <h1 class="text-center text-4xl font-semibold mb-6">
      File Uploader and Preview
    </h1>
    <UploadFileModal @onAddElement="handleAddElement" />
    <!-- Display the selected image here if needed -->
    <div v-if="selectedImage">
      <img :src="selectedImage" alt="Selected Image" class="w-20 h-auto" />
    </div>
  </div>
</template>

<script setup>
import UploadFileModal from "components/UploadFileModal.vue";

const selectedImage = ref("");

const handleAddElement = (image) => {
  console.log("Selected Image:", image);

  selectedImage.value = image;
};
</script>
