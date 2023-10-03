<template>
  <q-page class="flex h-[100vh]">
    <div class="basis-3/12 bg-white h-full">
      <div class="bg-white h-32 mt-12">
        <img
          src="../../public/icons/ingenuity-black.png"
          class="h-[90px] pl-28 pt-12"
          alt=""
        />
      </div>
      <!-- element -->
      <div class="flex justify-center items-center bg-white mt-5">
        <div class="w-[50%] bg-white font-medium">
          <div class="bg-white py-7 flex cursor-pointer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
                />
              </svg>
            </div>
            <div class="pl-3" @click="colorModal = true">Custom color</div>
            <q-dialog v-model="colorModal">
              <ColorModal />
            </q-dialog>
          </div>
          <div class="bg-white py-7 flex">
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545 19.381 19.381 0 017 9.56a19.418 19.418 0 01-1.002-2.05.75.75 0 00-1.384.577 20.935 20.935 0 001.492 2.91 19.613 19.613 0 01-3.828 4.154.75.75 0 10.945 1.164A21.116 21.116 0 007 12.331c.095.132.192.262.29.391a.75.75 0 001.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 002.333-5.332c.31.031.618.068.924.108a.75.75 0 00.198-1.487 32.832 32.832 0 00-3.599-.278V2.75z"
                />
                <path
                  fill-rule="evenodd"
                  d="M13 8a.75.75 0 01.671.415l4.25 8.5a.75.75 0 11-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 11-1.342-.67l4.25-8.5A.75.75 0 0113 8zm2.037 6.5L13 10.427 10.964 14.5h4.073z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="pl-3 cursor-pointer" @click="fontModal = true">
              Font style
            </div>
            <q-dialog v-model="fontModal">
              <FontModal @onChangeFont="changeFont" />
            </q-dialog>
          </div>

          <!-- text -->
          <div class="bg-white py-7 flex">
            <div class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="pl-3 cursor-pointer" @click="textModal = true">
              Add your text
            </div>
            <q-dialog v-model="textModal">
              <TextModal @addNewMessage="addElement" />
            </q-dialog>
          </div>

          <!-- element -->
          <div class="bg-white py-7 flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"
                />
              </svg>
            </div>
            <div class="pl-3 cursor-pointer" @click="elementModal = true">
              Element
            </div>
            <q-dialog v-model="elementModal">
              <ElementModal @onAddElement="addElement" />
            </q-dialog>
          </div>
          <!-- <div class="bg-white py-7 flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="pl-3">Import product image</div>
          </div> -->
        </div>
        <div class="w-[75%] bg-white flex justify-center items-center">
          <button
            class="bg-slate-950 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-full w-[75%] h-12 mt-20 text-xs"
            @click="$router.go(-1)"
          >
            BACK TO TEMPLATE
          </button>
        </div>
      </div>
      <!-- element -->
    </div>
    <div class="basis-9/12 bg-slate-950 h-full">
      <div dir="rtl" class="bg-slate-950 flex mr-4">
        <div>
          <button
            class="bg-red-600 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-full h-12 mt-10 text-xs"
          >
            Save to change
          </button>
        </div>
        <div class="mr-5">
          <button
            class="bg-red-400 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-full h-12 mt-10 text-xs ml-5"
            @click="downloadDataURL"
          >
            Download
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center text-hw">
        <!-- {{ items }} -->
        <div
          class="text-white text-xl bg-slate-500 h-[600px] w-[600px] mt-7 flex justify-center items-center"
        >
          <VueKonva
            v-if="items.length"
            ref="refKonva"
            :items="items"
            :height="600"
            :width="600"
            @onRemoveElement="removeElement"
            @onSelectedItem="selectedElement"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import VueKonva from "src/components/tools/VueKonva.vue";
import ElementModal from "src/components/edit/ElementModal.vue";
import TextModal from "src/components/edit/TextModal.vue";
import ColorModal from "src/components/edit/ColorModal.vue";
import FontModal from "src/components/edit/FontModal.vue";

const refKonva = ref();

const elementModal = ref(false);
const textModal = ref(false);
const colorModal = ref(false);
const fontModal = ref(false);

const items = ref([
  {
    type: "image",
    config: {
      x: 0,
      y: 0,
      width: 600,
      height: 600,
      src: "src/assets/background/background-red.png",
      name: "1",
      draggable: true,
    },
  },
  // {
  //   type: "path",
  //   config: {
  //     name: "0",
  //     x: 240,
  //     y: 40,
  //     data: "M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z",
  //     fill: "green",
  //     scaleX: 1,
  //     scaleY: 1,
  //     draggable: true,
  //   },
  // },

  {
    type: "image",
    config: {
      x: 215,
      y: 100,
      width: 400,
      height: 500,
      src: "src/assets/model/model1.png",
      name: "1",
      draggable: true,
    },
  },

  {
    type: "image",
    config: {
      x: 200,
      y: 0,
      width: 600,
      height: 600,
      src: "src/assets/effect/effect-red.png",
      opacity: 0.3,
      draggable: true,
    },
  },
  {
    type: "image",
    config: {
      x: -150,
      y: 80,
      width: 600,
      height: 600,
      src: "src/assets/effect/white-effect.png",
      draggable: true,
      opacity: 0.8,
    },
  },
  {
    type: "image",
    config: {
      x: -30,
      y: 150,
      width: 400,
      height: 400,
      src: "src/assets/product/pink.png",
      name: "3",
      draggable: true,
    },
  },
  {
    type: "image",
    config: {
      x: 376,
      y: 850,
      rotation: "-180",
      width: 400,
      height: 400,
      src: "src/assets/product/pink.png",
      name: "6",
      draggable: true,
      opacity: 0.15,
    },
  },

  {
    type: "text",
    config: {
      x: 70,
      y: 80,
      fontSize: "30",
      fontFamily: "Poppins",
      fill: "#ffffff",
      text: "R O S E  S K I N",
      name: "8",
      draggable: true,
    },
  },
  {
    type: "text",
    config: {
      x: 65,
      y: 120,
      fontSize: "14",
      fontFamily: "Poppins",
      fill: "white",
      text: "Lorem ipsum dolor sit amet, consectetur.",
      name: "9",
      draggable: true,
    },
  },
  {
    type: "text",
    config: {
      x: 45,
      y: 140,
      fontSize: "14",
      fontFamily: "Poppins",
      fill: "white",
      text: "Lorem ipsum dolor sit amet, consectetur magna.",
      name: "10",
      draggable: true,
    },
  },

  {
    type: "rect",
    config: {
      name: "19",
      rotation: 0,
      x: 100,
      y: 175,
      width: 150,
      height: 35,
      scaleX: 1,
      scaleY: 1,
      fill: "white",
      cornerRadius: 5,
      draggable: true,
    },
  },
  {
    type: "text",
    config: {
      x: 143,
      y: 186,
      fontStyle: "",
      fontSize: "14",
      fontFamily: "Poppins",
      text: "BUY NOW",
      name: "11",
      draggable: true,
    },
  },

  {
    type: "image",
    config: {
      x: 165,
      y: 300,
      width: 80,
      height: 80,
      opacity: 0.9,
      src: "src/assets/effect/sparkle-white.png",
      name: "3",
      draggable: true,
    },
  },
  // {
  //   type: "image",
  //   config: {
  //     x: 460,
  //     y: 270,
  //     width: 650,
  //     height: 650,
  //     rotation: 80,

  //     src: "src/assets/flower/rose-pental-blur.png",
  //     name: "14",
  //     draggable: true,
  //   },
  // },
  // {
  //   type: "image",
  //   config: {
  //     x: 760,
  //     y: 380,
  //     width: 650,
  //     height: 650,
  //     rotation: -80,

  //     src: "src/assets/flower/rose-pental-blur.png",
  //     name: "14",
  //     draggable: true,
  //   },
  // },
  {
    type: "image",
    config: {
      x: 520,
      y: 270,
      width: 650,
      height: 650,
      rotation: 80,
      opacity: 0.7,
      src: "src/assets/flower/rose-pental.png",
      name: "14",
      draggable: true,
    },
  },

  {
    type: "image",
    config: {
      x: 250,
      y: 350,
      width: 650,
      height: 650,
      rotation: 270,
      opacity: 0.5,
      src: "src/assets/flower/rose-pental.png",
      name: "16",
      draggable: true,
    },
  },
  {
    type: "image",
    config: {
      x: 215,
      y: 350,
      width: 180,
      height: 180,
      opacity: 0.8,
      src: "src/assets/flower/rose-pental.png",
      name: "17",
      draggable: true,
    },
  },
  {
    type: "image",
    config: {
      x: 50,
      y: 570,
      width: 100,
      height: 100,
      rotation: "-90",
      opacity: 0.2,
      src: "src/assets/flower/rose.png",
      name: "13",
      draggable: true,
    },
  },
  {
    type: "image",
    config: {
      x: 50,
      y: 420,
      width: 100,
      height: 100,
      src: "src/assets/flower/rose.png",
      name: "12",
      draggable: true,
    },
  },
  {
    type: "text",
    config: {
      x: 180,
      y: 500,
      rotation: "-90",
      fontSize: "30",
      fontFamily: "Sacramento",
      fontStyle: "bold",
      text: "- rose skin -",
      opacity: 0.5,
      name: "7",
      draggable: true,
    },
  },
]);
const selectName = ref("");

const addElement = (shape) => {
  elementModal.value = false;
  textModal.value = false;
  colorModal.value = false;

  items.value.push(shape);
  items.value = items.value.map((item, index) => {
    item.config.name = index.toString();
    return item;
  });
};

const removeElement = (name) => {
  items.value = items.value.filter((item) => {
    return item.config.name != name;
  });
};

const selectedElement = (val) => (selectName.value = val);

const changeFont = (font) => {
  fontModal.value = false;

  if (!selectName.value) return;
  const index = items.value.findIndex((item) => {
    return item.config.name === selectName.value;
  });
  items.value[index].config.fontFamily = font;
};

const downloadDataURL = () => {
  refKonva.value.downloadDataURL();
};
</script>
