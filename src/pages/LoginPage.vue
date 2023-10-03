<template>
  <q-page class="flex h-[100vh]">
    <div class="basis-2/5 bg-[#1C1D21] h-full">
      <div class="h-full flex flex-col">
        <div
          class="h-[75%] my-auto ml-28 bg-cover border-t border-l border-b border-white rounded-l-[50px] border-opacity-30"
          style="background-image: url(../../public/bg/login-gradient.png)"
        ></div>
      </div>
    </div>
    <div class="basis-3/5 bg-[#28084B] h-full">
      <div class="h-full flex flex-col">
        <div
          class="h-[75%] my-auto mr-28 bg-cover border-t border-r border-b border-white rounded-r-[60px] text-white border-opacity-30"
          style="background-image: url(../../public/bg/login-from-bg.png)"
        >
          <div class="justify-center items-center mt-20">
            <div class="text-center my-10">
              <div class="text-3xl font-black">WELCOME TO INGENUITY</div>
              <div class="font-meduim text-base">
                Lets create your own ads here !
              </div>
            </div>

            <!-- input username -->
            <div class="w-2/4 mx-auto justify-center items-center">
              <q-input
                color="black"
                standout
                bottom-slots
                v-model="text"
                label-color="gray"
                label="Username"
                rounded
                outlined
                counter
                clearable
                bg-color="white"
              >
                <template v-slot:prepend>
                  <q-icon class="px-2" name="face" />
                </template>

                <template v-slot:hint> Field hint </template>
              </q-input>
              <q-input
                color="black"
                standout
                bottom-slots
                v-model="text"
                label-color="gray"
                label="Email"
                rounded
                outlined
                counter
                clearable
                bg-color="white"
              >
                <template v-slot:prepend>
                  <q-icon class="px-2" name="mail" />
                </template>

                <template v-slot:hint> Field hint </template>
              </q-input>
              <q-input
                color="black"
                standout
                bottom-slots
                v-model="text"
                label-color="gray"
                label="Password"
                rounded
                outlined
                counter
                clearable
                bg-color="white"
              >
                <template v-slot:prepend>
                  <q-icon class="px-2" name="lock" />
                </template>

                <template v-slot:hint> Field hint </template>
              </q-input>

              <!-- btn -->
              <button
                class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full w-[100%] h-14 my-7"
                @click="$router.push({ name: 'Home' })"
              >
                Sign in
              </button>
              <!-- end btn -->
              <div class="flex justify-center items-center">
                <div class="">Don't have an account?</div>
                <div
                  class="pl-1 font-bold cursor-pointer"
                  @click="$router.push({ name: 'Signup' })"
                >
                  Sign up
                </div>
              </div>
            </div>

            <!-- end input -->
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
</script>

<style scoped></style>
