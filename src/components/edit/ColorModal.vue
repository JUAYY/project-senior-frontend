<template>
  <div>
    <q-card class="">
      <q-card-section class="row q-pb-none">
        <div class="w-[500px] justify-center items-center object-center py-3">
          <div class="flex font-extrabold text-lg mt-2 pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-7 h-7"
            >
              <path
                fill-rule="evenodd"
                d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="pl-3 cursor-pointer">Set your color palette</div>
          </div>
          <!-- palatte -->
          <div class="my-1 w-[100%]">
            <div
              class="q-pa-md justify-center items-center flex"
              style="max-width: 700px"
            >
              <button
                class="bg-gradient-to-rtext-white font-medium rounded-full w-[50%] h-16 mb-3 mt-5 justify-center items-center flex mx-1"
              >
                <div
                  class="rounded-full bg-red-100 w-[30px] h-[30px] mx-3"
                ></div>
                <div
                  class="rounded-full bg-red-300 w-[30px] h-[30px] mx-3"
                ></div>
                <div
                  class="rounded-full bg-red-500 w-[30px] h-[30px] mx-3"
                ></div>
                <div
                  class="rounded-full bg-red-700 w-[30px] h-[30px] mx-3"
                ></div>
              </button>

              <button
                class="bg-gradient-to-rtext-white font-medium rounded-full w-[50%] h-16 my-2 justify-center items-center flex mx-1"
              >
                <div
                  class="rounded-full bg-blue-100 w-[30px] h-[30px] mx-3"
                ></div>
                <div
                  class="rounded-full bg-blue-300 w-[30px] h-[30px] mx-3"
                ></div>
                <div
                  class="rounded-full bg-blue-500 w-[30px] h-[30px] mx-3"
                ></div>
                <div
                  class="rounded-full bg-blue-700 w-[30px] h-[30px] mx-3"
                ></div>
              </button>
            </div>
          </div>
          <div class="my-1 w-[100%] justify-center items-center">
            <div
              class="q-pa-md justify-center items-center flex"
              style="max-width: 800px"
            ></div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
// const emit = defineEmits(["receiveMessage"]);

// const onSubmit = () => {
//   // console.log("eiei");
//   // console.log("name: ", name.value);
//   if (!txtConfig.value) return;
//   txtConfig.value.config.text = name.value;
//   emit("receiveMessage", txtConfig.value);
// };
// const onReset = () => {
//   name.value = null;
//   accept.value = false;
// };
</script>
