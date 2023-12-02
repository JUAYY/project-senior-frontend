<template>
  <div class="flex">
    <div class="col basis-1/3">
      <div
        class="w-full border-dashed border-4 border-gray-300 flex items-center justify-center cursor-pointer"
        style="height: 400px"
        @dragover.prevent
        @drop="onDropFile"
        @click="onClickInputFile"
      >
        <input
          type="file"
          ref="refInputFile"
          class="hidden"
          @change="onInputFile"
          multiple
        />
        <span class="text-gray-400" v-if="!previewImg">
          Drag and drop files here or click to select
        </span>
        <img
          v-else
          :src="previewImg"
          alt="Preview"
          class="w-11/12"
          style="max-height: 400px"
        />
      </div>
      <div class="pt-8 flex justify-center items-center">
        <q-btn
          :disable="!inputFile"
          outline
          rounded
          color="primary"
          label="Upload your product"
          @click="uploadImg"
        />
      </div>
    </div>
    <div class="col basis-2/3 px-12 flex">
      <!-- Display the image data -->
      <div
        v-for="(file, index) in elementFiles"
        :key="index"
        class="h-[120px] w-[120px] pb-2"
        @click="onClickImage(file)"
      >
        <img :src="file.config.src" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { findFile, upload } from "src/api/file";
import { onMounted, ref } from "vue";
import { findContentByUserId } from "src/api/content";

const previewImg = ref(null);
const refInputFile = ref(null);
const elementFiles = ref([]);
const inputFile = ref();

const emit = defineEmits(["onAddImage"]);

const onDropFile = (event) => {
  event.preventDefault();
  uploadFile(event.dataTransfer.files[0]);
};

const onClickInputFile = () => {
  refInputFile.value.click();
};

const onInputFile = (event) => {
  uploadFile(event.target.files[0]);
};

const getFiles = async (user_id) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const result = await findFile({ user_id: user.id });
    elementFiles.value = result.data.map((data) => ({
      type: "image",
      config: {
        x: 1,
        y: 1,
        width: 100,
        height: 100,
        src: data.url,
        draggable: true,
      },
    }));
  } catch (error) {
    console.log("🚀 ~ getFiles ~ error:", error);
  }
};

const uploadFile = (file) => {
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImg.value = reader.result;
      // 'reader.result' contains the image data
    };
    reader.readAsDataURL(file);
    inputFile.value = file;
  }
};

const onClickImage = (val) => emit("onAddImage", val);

const uploadImg = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (!inputFile.value) return;

    const data = new FormData();
    data.append("file", inputFile.value);
    data.append("user_id", user.id);
    await upload(data);

    previewImg.value = null;
    getFiles();
  } catch (error) {
    console.log("🚀 ~ uploadImg ~ error:", error);
  }
};

onMounted(() => {
  getFiles();
});
</script>
