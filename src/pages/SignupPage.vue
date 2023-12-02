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
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Username cannot be empty ',
                  ]"
                  color="black"
                  standout
                  bottom-slots
                  v-model="username"
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
                  class="pt-2"
                  :rules="[
                    (val, rules) => rules.email(val) || 'Email cannot be empty',
                  ]"
                  color="black"
                  standout
                  bottom-slots
                  v-model="email"
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
                  class="pt-2"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Password cannot be empty',
                  ]"
                  color="black"
                  standout
                  bottom-slots
                  v-model="password"
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
                  @click="Register"
                >
                  Sign up
                </button>
                <!-- end btn -->
                <div class="flex justify-center items-center">
                  <div class="">Don't have an account?</div>
                  <div
                    class="pl-1 font-bold cursor-pointer"
                    @click="$router.push({ name: 'Login' })"
                  >
                    Sign in
                  </div>
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
import { signup } from "src/api/auth";
import { useRouter } from "vue-router";

const username = ref("mumi");
const email = ref("mumi@gmail.com");
const password = ref("123456");

const router = useRouter();

const text = ref("");

const Register = async () => {
  try {
    await signup(username.value, email.value, password.value);
    router.push({ name: "Login" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
