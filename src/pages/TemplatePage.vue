<template>
  <div class="h-[100%] bg-slate-950">
    <!-- social media -->
    <div class="text-2xl font-extrabold text-white pl-28 pt-24">
      SOCIAL MEDIA
    </div>
    <!-- facebook -->
    <div class="text-sm font-medium text-white flex pl-28 pt-2">
      <div class="pr-2">F A C E B O O K</div>
      <div class="px-2">P O S T</div>
      <div class="pl-10">S I Z E</div>
      <div class="pl-3">( 2 3 * 2 3 p x)</div>
    </div>
    <div class="grid grid-cols-3 gap-10 px-28 py-10 h-[400px]">
      <div class="bg-white" @click="pushToEditTemplate">01</div>
      <div class="bg-white" @click="pushToEditTemplate">02</div>
      <div class="bg-white" @click="pushToEditTemplate">03</div>
    </div>
    <!-- facebook -->

    <!-- ig -->
    <div class="text-sm font-medium text-white flex pl-28 pt-20">
      <div class="pr-2">I N S T R A G R A M</div>
      <div class="px-2">P O S T</div>
      <div class="pl-10">S I Z E</div>
      <div class="pl-3">( 2 3 * 2 3 p x)</div>
    </div>
    <div class="grid grid-cols-3 gap-10 px-28 py-10 h-[400px]">
      <div class="bg-white">01</div>
      <div class="bg-white">02</div>
      <div class="bg-white">03</div>
    </div>
    <!-- ig -->
    <!-- social media -->

    <!-- paper -->
    <div class="text-2xl font-extrabold text-white pl-28 pt-24">P A P E R</div>
    <!-- a4 -->
    <div class="text-sm font-medium text-white flex pl-28 pt-2">
      <div class="pr-2">A 4</div>
      <div class="pl-10">S I Z E</div>
      <div class="pl-3">( 2 3 * 2 3 p x)</div>
    </div>
    <div class="grid grid-cols-3 gap-10 px-28 py-10 h-[400px]">
      <div class="bg-white">01</div>
      <div class="bg-white">02</div>
      <div class="bg-white">03</div>
    </div>
    <!-- a4 -->
    <!-- paper -->
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const pushToEditTemplate = () => {
  return router.push({ name: "Edit" });
};
</script>
