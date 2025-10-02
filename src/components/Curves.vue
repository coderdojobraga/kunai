<template>
  <div class="relative flex justify-center curve-container">
    <div class="curveTop"></div>
    <div class="rectangle"></div>
    <div class="curveBottom"></div>
  </div>
</template>

<style scoped>
.curve-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.rectangle::before {
  content: "";
  position: absolute;
  z-index: -4;
  width: 100vw;
  height: 100vh;
  background-color: hsl(0, 0%, 20%);
  transform: translate(0, -100%);
}

.rectangle::after {
  content: "";
  position: absolute;
  z-index: -4;
  width: 100vw;
  height: 100vh;
  background-color: hsl(0, 0%, 20%);
}

.curveTop {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 9999px;
  border-radius: 9999px;
  background-color: white;
  transform: translateY(-100%);
}

.curveBottom {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 9999px;
  border-radius: 9999px;
  background-color: hsl(0, 0%, 20%);
}

/* Adjustment for wide screens */
@media (min-width: 1230px) {
  .curveTop,
  .curveBottom {
    width: calc(100vw + (100vw - 1230px) / 4);
  }
}
</style>
