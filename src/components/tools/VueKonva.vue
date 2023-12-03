<template>
  <v-stage
    v-if="items.length"
    ref="refState"
    :config="configKonva"
    @mousedown="handleStageMouseDown"
    @touchstart="handleStageMouseDown"
  >
    <v-layer>
      <div v-for="(item, index) in items" :key="index">
        <v-circle
          v-if="item.type == 'circle'"
          :config="item.config"
          @transformend="handleTransformEnd"
          @dragend="handleDragEnd"
        />
        <v-text
          v-if="item.type == 'text'"
          :config="item.config"
          @transformend="handleTransformEnd"
          @dragend="handleDragEnd"
          @dblclick="handleEditText"
        />
        <v-rect
          v-if="item.type == 'rect'"
          :config="item.config"
          @transformend="handleTransformEnd"
          @dragend="handleDragEnd"
        />
        <v-image
          v-if="item.type == 'image'"
          :config="item.config"
          @transformend="handleTransformEnd"
          @dragend="handleDragEnd"
        />

        <v-star
          v-if="item.type == 'star'"
          :config="item.config"
          @transformend="handleTransformEnd"
          @dragend="handleDragEnd"
        />
        <v-image
          v-if="item.type == 'image'"
          :config="displayImage(item.config)"
          @transformend="handleTransformEnd"
          @dragend="handleDragEnd"
        />
      </div>

      <v-transformer ref="refTranformer" />
    </v-layer>
  </v-stage>
</template>

<script setup>
import { onMounted, ref } from "vue";

const emit = defineEmits([
  "onAddElement",
  "onRemoveElement",
  "onSelectedItem",
  "onUploadFile",
]);

const props = defineProps({
  items: { type: Array },
  width: { type: Number },
  height: { type: Number },
});

// const img = ref([{ image: null }]);

const configKonva = ref({
  width: 0,
  height: 0,
});

const refState = ref();
const refTranformer = ref();

const selectedShapeName = ref("");

onMounted(() => {
  configKonva.value.height = props.height;
  configKonva.value.width = props.width;
});

const handleEditText = () => {
  const transformerNode = refTranformer.value.getNode();
  const stage = transformerNode.getStage();
  const textNode = stage.findOne("." + selectedShapeName.value);
  textNode.hide();

  // create textarea over canvas with absolute position
  // first we need to find position for textarea
  // how to find it?

  // at first lets find position of text node relative to the stage:
  var textPosition = textNode.absolutePosition();

  // so position of textarea will be the sum of positions above:
  var areaPosition = {
    x: stage.container().offsetLeft + textPosition.x,
    y: stage.container().offsetTop + textPosition.y,
  };

  // create textarea and style it
  var textarea = document.createElement("textarea");
  document.body.appendChild(textarea);

  // apply many styles to match text on canvas as close as possible
  // remember that text rendering on canvas and on the textarea can be different
  // and sometimes it is hard to make it 100% the same. But we will try...
  textarea.value = textNode.text();
  textarea.style.position = "absolute";
  textarea.style.top = areaPosition.y + "px";
  textarea.style.left = areaPosition.x + "px";
  textarea.style.width = textNode.width() - textNode.padding() * 2 + "px";
  textarea.style.height = textNode.height() - textNode.padding() * 2 + 5 + "px";
  textarea.style.fontSize = textNode.fontSize() + "px";
  textarea.style.border = "none";
  textarea.style.padding = "0px";
  textarea.style.margin = "0px";
  textarea.style.overflow = "hidden";
  textarea.style.background = "none";
  textarea.style.outline = "none";
  textarea.style.resize = "none";
  textarea.style.lineHeight = textNode.lineHeight();
  textarea.style.fontFamily = textNode.fontFamily();
  textarea.style.transformOrigin = "left top";
  textarea.style.textAlign = textNode.align();
  textarea.style.color = textNode.fill();
  const rotation = textNode.rotation();

  var transform = "";
  if (rotation) {
    transform += "rotateZ(" + rotation + "deg)";
  }

  var px = 0;
  // also we need to slightly move textarea on firefox
  // because it jumps a bit
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  if (isFirefox) {
    px += 2 + Math.round(textNode.fontSize() / 20);
  }
  transform += "translateY(-" + px + "px)";

  textarea.style.transform = transform;

  // reset height
  textarea.style.height = "auto";
  // after browsers resized it we can set actual value
  textarea.style.height = textarea.scrollHeight + 3 + "px";

  textarea.focus();

  function removeTextarea() {
    textarea.parentNode.removeChild(textarea);
    window.removeEventListener("click", handleOutsideClick);
    textNode.show();
  }

  function setTextareaWidth(newWidth) {
    if (!newWidth) {
      // set width for placeholder
      newWidth = textNode.placeholder.length * textNode.fontSize();
    }
    // some extra fixes on different browsers
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    if (isSafari || isFirefox) {
      newWidth = Math.ceil(newWidth);
    }

    var isEdge = document.documentMode || /Edge/.test(navigator.userAgent);
    if (isEdge) {
      newWidth += 1;
    }
    textarea.style.width = newWidth + "px";
  }

  textarea.addEventListener("keydown", function (e) {
    // hide on enter
    // but don't hide on shift + enter
    if (e.keyCode === 13 && !e.shiftKey) {
      textNode.text(textarea.value);
      removeTextarea();
    }
    // on esc do not set value back to node
    if (e.keyCode === 27) {
      removeTextarea();
    }
  });

  textarea.addEventListener("keydown", function (e) {
    scale = textNode.getAbsoluteScale().x;
    setTextareaWidth(textNode.width() * scale);
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + textNode.fontSize() + "px";
  });

  function handleOutsideClick(e) {
    if (e.target !== textarea) {
      textNode.text(textarea.value);
      removeTextarea();
    }
  }
  setTimeout(() => {
    window.addEventListener("click", handleOutsideClick);
  });
};

const handleTransformEnd = (e) => {
  // shape is transformed, let us save new attrs back to the node
  // find element in our state
  const item = props.items.find((item) => {
    return item.config.name === selectedShapeName.value;
  });

  if (!item) return;

  // update the state
  item.config.x = e.target.x();
  item.config.y = e.target.y();
  item.config.rotation = e.target.rotation();
  item.config.scaleX = e.target.scaleX();
  item.config.scaleY = e.target.scaleY();
};

const handleDragEnd = (e) => {
  // shape is transformed, let us save new attrs back to the node
  // find element in our state
  const item = props.items.find((item) => {
    return item.config.name === selectedShapeName.value;
  });

  if (!item) return;

  // update the state
  item.config.x = e.target.x();
  item.config.y = e.target.y();
};

const handleStageMouseDown = (e) => {
  // clicked on stage - clear selection
  if (e.target === e.target.getStage()) {
    selectedShapeName.value = "";
    updateTransformer();
    return;
  }
  // clicked on transformer - do nothing
  const clickedOnTransformer = e.target.getParent().className === "Transformer";
  if (clickedOnTransformer) return;

  const name = e.target.name();
  const item = props.items.find((item) => item.config.name === name);

  if (item) {
    selectedShapeName.value = name;
  } else {
    selectedShapeName.value = "";
  }

  updateTransformer();
};

const updateTransformer = () => {
  // here we need to manually attach or detach Transformer node
  const transformerNode = refTranformer.value.getNode();
  const stage = transformerNode.getStage();
  const selectedNode = stage.findOne("." + selectedShapeName.value);
  // do nothing if selected node is already attached
  if (selectedNode === transformerNode.node()) return;

  const container = stage.container();

  if (selectedNode) {
    container.tabIndex = 1;
    container.focus();
    container.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && props.items.length) {
        selectedNode.destroy();
        transformerNode.nodes([]);
        emit("onRemoveElement", selectedShapeName.value);
        e.preventDefault();
      }
    });

    emit("onSelectedItem", selectedShapeName.value);
    transformerNode.nodes([selectedNode]);
  } else {
    emit("onSelectedItem", "");
    transformerNode.nodes([]);
  }
};

const displayImage = async (config) => {
  const image = new window.Image();
  image.src = config.src;
  image.crossOrigin = "*";
  image.onload = () => {
    config.image = image;
  };
};

const downloadDataURL = ({ isUpload, isDownload }) => {
  const transformerNode = refTranformer.value.getNode();
  transformerNode.nodes([]);
  const stage = transformerNode.getStage();
  const dataURL = stage.toDataURL();

  if (!dataURL) return;

  if (isDownload) {
    const link = document.createElement("a");
    link.download = "advertisment.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (isUpload) {
    // Convert data URL to a Blob
    const blob = dataURLtoBlob(dataURL);
    emit("onUploadFile", blob);
  }
};

// Function to convert data URL to Blob
const dataURLtoBlob = (dataURL) => {
  const parts = dataURL.split(";base64,");
  const contentType = parts[0].split(":")[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uint8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uint8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uint8Array], { type: contentType });
};

defineExpose({ downloadDataURL });
</script>
