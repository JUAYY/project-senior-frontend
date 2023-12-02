<template>
  <div
    class="q-drawer"
    style="background-color: #1c1d21"
    :class="{ open: isOpen }"
  ></div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
};
</script>

<style scoped>
.q-drawer {
  position: fixed;
  right: -600px; /* Start the drawer off-screen */
  bottom: 0; /* Position the drawer at the bottom */
  height: 30%;
  width: 400px; /* Adjust the width as needed */
  background-color: #1c1d21; /* Adjust the background color as needed */
  z-index: 1000; /* Adjust the z-index as needed */
  transition: right 0.3s ease-in-out;
}

.q-drawer.open {
  right: 0; /* Slide the drawer in from the right */
}
</style>
