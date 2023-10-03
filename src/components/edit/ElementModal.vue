<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="flex font-extrabold text-lg">
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
        <div class="pl-3 cursor-pointer">Element</div>
      </div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <div class="text-base font-medium my-4 text-center">S H A P E</div>
      <div class="flex">
        <div
          class="h-[150px] w-[150px] bg-white flex justify-center items-center"
        >
          <div
            class="w-[120px] h-[120px] bg-red-700 rounded-full"
            @click="onClickShape('circle')"
          ></div>
        </div>
        <div
          class="h-[150px] w-[150px] bg-white flex justify-center items-center"
        >
          <div class="flex items-center space-x-3">
            <svg
              @click="onClickShape('star')"
              class="w-[150px] h-[150px] text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </div>
        </div>
        <div
          class="h-[150px] w-[150px] bg-white flex justify-center items-center"
        >
          <div
            @click="onClickShape('rect')"
            class="h-[120px] w-[120px] bg-blue-200"
          ></div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["onAddElement"]);

const shapeObj = ref({
  circle: {
    type: "circle",
    config: {
      x: 100,
      y: 100,
      radius: 70,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
      draggable: true,
    },
  },
  star: {
    type: "star",
    config: {
      x: 100,
      y: 100,
      fill: "red",
      numPoints: 5,
      innerRadius: 30,
      outerRadius: 50,
      opacity: 0.8,
      shadowColor: "black",
      shadowBlur: 10,
      shadowOpacity: 0.6,
      draggable: true,
    },
  },
  rect: {
    type: "rect",
    config: {
      rotation: 0,
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      scaleX: 1,
      scaleY: 1,
      fill: "red",
      draggable: true,
    },
  },
});

const onClickShape = (val) => {
  const shape = shapeObj.value[val];
  if (!shape) return;
  emit("onAddElement", shape);
};
</script>
