<template>
  <q-card class="">
    <q-card-section class="row q-pb-none">
      <div class="w-[500px] justify-center items-center object-center py-3">
        <div class="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-6 h-6 mx-3"
            >
              <path
                fill-rule="evenodd"
                d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="font-bold text-lg">Font style</div>
        </div>
        <div class="my-1 w-[100%] justify-center items-center">
          <div
            class="q-pa-md justify-center items-center flex cursor-pointer text-slate-900 hover:text-slate-300"
            style="max-width: 800px"
            @click="onClickFont('Poppins')"
          >
            <div>Poppins</div>
          </div>
          <div
            class="q-pa-md justify-center items-center flex cursor-pointer text-slate-900 hover:text-slate-300"
            style="max-width: 800px"
            @click="onClickFont('Sacramento')"
          >
            <div>Sacramento</div>
          </div>
          <div
            class="q-pa-md justify-center items-center flex cursor-pointer text-slate-900 hover:text-slate-300"
            style="max-width: 800px"
            @click="onClickFont('Caveat')"
          >
            <div>Caveat</div>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["onChangeFont"]);

const onClickFont = (style) => {
  // console.log("🚀 ~ onClickFont ~ style:", style);
  emit("onChangeFont", style);
};
</script>
