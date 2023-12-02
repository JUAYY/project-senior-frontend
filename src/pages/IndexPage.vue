<template>
  <q-page class="">
    <div
      class="my-auto bg-cover bg-center relative h-[ุุ600px] bg-slate-900 flex"
      style="
        background-image: url(../../public/bg/history-4.png);
        background-size: contain cover;
      "
    >
      <div class="col relative">
        <div class="col-12 absolute">
          <div>
            <img
              src="../../public/bg/sparkle-white.png"
              alt=""
              style="height: 250px"
            />
          </div>
        </div>

        <!-- Add an empty div for spacing -->
        <div class="columns-xl py-16 px-20">
          <div
            class="bg-gradient-to-r from-indigo-500 from-50% to-sky-500 to-90% basis-1/4 p-3 rounded-full pl-5 mt-10 ml-5 text-md"
            style="width: 170px; color: white; font-weight: 600"
          >
            W e l c o m e &nbsp; t o . .
          </div>
          <div
            class="basis-1/4 px-5 py-6 text-6xl mt-3"
            style="color: white; font-weight: 800"
          >
            INGENUITY
          </div>
          <div
            class="basis-1/4 px-5 text-md"
            style="
              color: white;
              font-weight: 400;
              background: rgba(24, 24, 24, 0);
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            fringilla dui, <br />
            eu malesuada turpis. Pellentesque blandit eu malesuada turpis.
            Pellentesque.
          </div>
          <div
            class="border-2 border-white p-3 rounded-full pl-5 mt-16 ml-5 text-md flex"
            style="width: 160px; color: white; font-weight: 600"
          >
            <div>G e t &nbsp; S t a r t</div>
            <div><q-icon class="px-2" name="keyboard_double_arrow_down" /></div>
          </div>
          <div class="col-12 absolute top-0 right-0">
            <div>
              <img
                src="../../public/bg/sparkle-white.png"
                alt=""
                style="height: 300px"
              />
            </div>
            <div
              class="col-12 absolute right-0 bottom-1000"
              style="transform: rotate(-0.9turn); opacity: 0.7"
            >
              <img
                src="../../public/bg/sparkle-white.png"
                alt=""
                style="height: 200px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col relative">
        <div class="col-12 absolute top-0 -right-40">
          <div>
            <img
              src="../../public/bg/sparkle-white.png"
              alt=""
              style="height: 300px"
            />
          </div>
        </div>
        <div class="row">
          <div class="col flex items-center justify-center pr-14">
            <img
              src="../assets/login-asset/cat-inspace.png"
              alt=""
              style="height: 500px"
            />
          </div>
        </div>
        <div class="col-12 absolute top-0 left-0">
          <div>
            <img
              src="../../public/bg/sparkle-white.png"
              alt=""
              style="height: 300px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="h-[100%] bg-slate-950">
      <div class="text-2xl font-extrabold text-white pl-28 pt-24">HISTORY</div>
      <div class="text-sm font-medium text-white flex pl-28 pt-2">
        <div class="pr-2">Y O U R</div>
        <div class="px-2">O W N</div>
        <div class="px-2">D E S I G N</div>
      </div>
      <div class="grid grid-cols-3 gap-10 px-28 py-10 h-[400px]">
        <div
          v-for="(content, index) in contents"
          :key="index"
          class="bg-white"
          @click="pushToEditContent(content)"
        >
          <img :src="content.cover_image_url" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { findContentByUserId } from "../api/content";

const router = useRouter();
const contents = ref([]);

const pushToEditContent = (content) => {
  return router.push({ name: "EditContent", params: { id: content.id } });
};

const findContent = async (user_id) => {
  // console.log("success find content");
  // console.log("user id: ", user_id);
  try {
    const data = await findContentByUserId(user_id);
    contents.value = data.data;
    // console.log("contents.value: ", contents.value);
  } catch (error) {}
};

onMounted(async () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const user_id = user.id;
  findContent(user_id);
});
</script>
