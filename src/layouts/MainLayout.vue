<template>
  <q-layout view="lHh Lpr lFf">
    <div class="grid grid-cols-3 gap-3 bg-slate-950">
      <div class="bg-slate-950 h-32">
        <img
          src="../../public/icons/ingenuity.png"
          class="h-[90px] pl-28 pt-12"
          alt=""
        />
      </div>
      <div
        class="bg-slate-950 flex justify-center items-center h-32 text-white text-xs"
      >
        <div
          class="px-10 cursor-pointer"
          @click="$router.push({ name: 'Home' })"
        >
          H o m e
        </div>
        <div
          class="px-10 cursor-pointer"
          @click="$router.push({ name: 'Home' })"
        >
          H i s t o r y
        </div>
        <div
          class="px-10 cursor-pointer"
          @click="$router.push({ name: 'Template' })"
        >
          T e m p l a t e
        </div>
      </div>
      <div class="bg-slate-950 h-32 flex justify-center items-center">
        <div class="drawer cursor-pointer" @click="open('bottom')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
            color="white"
          >
            <path
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="relative">
      <q-dialog
        class="absolute bottom-0 right-0"
        v-model="dialog"
        :position="position"
      >
        <q-card style="width: 400px; height: 300px">
          <q-card-section class="row items-center no-wrap">
            <div class="flex">
              <div class="text-weight-bold">Logout</div>
              <q-icon class="px-2" name="keyboard_double_arrow_down" />
            </div>
            <q-space />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
const position = ref("buttom");

const open = (pos) => {
  position.value = pos;
  dialog.value = true;
};

const setup = () => {
  return {
    dialog,
    position,
    open,
  };
};
</script>
