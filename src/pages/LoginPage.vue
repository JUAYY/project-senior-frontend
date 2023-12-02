<template>
  <div class="flex h-[100vh] bg-[#1C1D21] justify-center items-center">
    <div class="flex h-[100vh] w-[80vw]">
      <div class="basis-3/6">
        <div class="h-full flex flex-col">
          <div
            class="h-[75%] my-auto bg-cover bg-center relative overflow-hidden rounded-l-[30px]"
            style="
              background-image: url(../../public/bg/gradient.png);
              background-size: contain cover;
            "
          >
            <div class="flex items-center justify-center">
              <img src="../assets/login-asset/cat.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="basis-3/6">
        <div class="h-full flex flex-col">
          <div
            class="h-[75%] my-auto bg-cover rounded-r-[30px] text-white"
            style="background-image: url(../../public/bg/login-from-bg.png)"
          >
            <div class="justify-center items-center mt-20">
              <div class="text-center my-10">
                <div class="text-3xl font-black" style="font-weight: 600px">
                  WELCOME TO INGENUITY
                </div>
                <div class="font-meduim text-base">
                  Lets create your own ads here !
                </div>
              </div>

              <!-- input username -->
              <div class="w-3/5 mx-auto justify-center items-center">
                <q-input
                  color="black"
                  standout
                  bottom-slots
                  v-model="email"
                  label-color="gray"
                  label="email"
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
                  v-model="password"
                  label-color="gray"
                  label="password"
                  rounded
                  outlined
                  counter
                  clearable
                  bg-color="white"
                >
                  <template v-slot:prepend>
                    <q-icon class="px-2" name="lock" />
                  </template>

                  <!-- <template v-slot:hint> Field hint </template> -->
                </q-input>

                <!-- btn -->
                <button
                  class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full w-[100%] h-14 my-7"
                  @click="signIn"
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

                  <!-- Tooltip for the hint -->
                </div>
                <div class="flex justify-center items-center">
                  <q-tooltip
                    class="text-center pt-5"
                    v-model="showTooltip"
                    style="
                      background-color: transparent !important;
                      box-shadow: none !important;
                      border: none !important;
                      color: red;
                      font-size: 13px;
                    "
                  >
                    Your email or password is incorrect!
                  </q-tooltip>
                </div>
              </div>

              <!-- end input -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { login } from "src/api/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("juay@gmail.com");
const password = ref("123456");

const showTooltip = ref(false);

const signIn = async () => {
  try {
    const data = await login(email.value, password.value);
    sessionStorage.setItem("user", JSON.stringify(data));
    router.push({ name: "Home" });
  } catch (error) {
    showTooltip.value = true;
    console.log(error);
  }
};
</script>

<style scoped></style>
