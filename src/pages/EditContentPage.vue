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
          <div class="bg-white py-7 flex font-medium mt-20">
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
            <div
              class="pl-3 cursor-pointer"
              @click="downloadDataURL({ isDownload: true })"
            >
              Download Design
            </div>
          </div>
        </div>
        <div class="w-[75%] bg-white flex justify-center items-center">
          <!-- <button
            class="bg-slate-950 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-full w-[75%] h-12 mt-20 text-xs"
            @click="$router.go(-1)"
          >
            Download
          </button> -->

          <button
            class="bg-slate-950 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-full w-[75%] h-12 mt-5 text-xs"
            @click="downloadDataURL({ isUpload: true })"
          >
            Save change
          </button>
        </div>
      </div>
      <!-- element -->
    </div>
    <div class="basis-9/12 bg-slate-950 h-full">
      <div class="bg-slate-950 flex mr-4">
        <div
          class="text-white font-medium rounded-full h-12 mt-8 text-xs flex pl-10"
        >
          <div class="flex" @click="backToTemp">
            <q-btn size="sm" icon="keyboard_backspace"></q-btn>
            <div class="mt-4 cursor-pointer">Back to History</div>
          </div>
        </div>
        <div class="px-2 flex grow" size="sm">
          <div
            class="text-white px-5 mt-8 flex text-center justify-center items-center cursor-pointer border transition border-transparent hover:border-white"
            size="sm"
            style="font-size: 12px"
          >
            / &nbsp; {{ nickname }}
            <q-popup-edit
              v-model="nickname"
              :validate="(val) => val.length > 0"
              v-slot="scope"
            >
              <q-input
                autofocus
                dense
                v-model="scope.value"
                :model-value="scope.value"
                hint="Change template name"
                :rules="[
                  (val) => scope.validate(val) || 'More than 5 chars required',
                ]"
              >
                <template v-slot:after>
                  <q-btn
                    flat
                    dense
                    color="negative"
                    icon="cancel"
                    @click.stop.prevent="scope.cancel"
                  />

                  <q-btn
                    flat
                    dense
                    color="positive"
                    icon="check_circle"
                    @click.stop.prevent="scope.set"
                    :disable="
                      scope.validate(scope.value) === false ||
                      scope.initialValue === scope.value
                    "
                  />
                </template>
              </q-input>
            </q-popup-edit>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center text-hw">
        <!-- {{ items }} -->
        <div
          class="text-white text-xl bg-slate-500 h-[600px] w-[600px] mt-7 flex justify-center items-center"
          v-if="items.length"
        >
          <VueKonva
            ref="refKonva"
            :items="items"
            :height="600"
            :width="600"
            @onRemoveElement="removeElement"
            @onSelectedItem="selectedElement"
            @onUploadFile="saveChange"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, ref } from "vue";
import VueKonva from "src/components/tools/VueKonva.vue";
import ElementModal from "src/components/edit/ElementModal.vue";
import TextModal from "src/components/edit/TextModal.vue";
import ColorModal from "src/components/edit/ColorModal.vue";
import FontModal from "src/components/edit/FontModal.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { updateContent, findOneByID } from "../api/content";
import { Notify } from "quasar";
import { upload } from "src/api/file";

const router = useRouter();
const route = useRoute();

const refKonva = ref();

const elementModal = ref(false);
const textModal = ref(false);
const colorModal = ref(false);
const fontModal = ref(false);
const nickname = ref("Add your template name");

const items = ref([]);

const selectName = ref("");

const backToTemp = () => {
  router.push({ name: "Home" });
};

const addElement = (config) => {
  elementModal.value = false;
  textModal.value = false;
  colorModal.value = false;

  items.value.push(config);
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

const downloadDataURL = (config) => {
  refKonva.value.downloadDataURL(config);
};

const getContent = async (id) => {
  try {
    const data = await findOneByID(id);
    items.value = data.elements;
    nickname.value = data.name;
  } catch (error) {
    console.log(error);
  }
};

const saveChange = async (blob) => {
  try {
    const name = nickname.value;
    const elements = items.value;
    const contentId = route.params.id;

    /**
     * @description upload file to api
     */
    const data = new FormData();
    data.append("file", blob, "filename.png");
    const file = await upload(data);

    const mapElements = elements.map((element) => {
      if (element.type === "image") delete element.config.image;
      return element;
    });

    await updateContent(contentId, name, mapElements, file.url);
    await getContent(contentId);

    Notify.create({ message: "successs", color: "positive" });
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  const contentId = route.params.id;

  getContent(contentId);
});
</script>
