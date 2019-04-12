<!-- http://tobiasahlin.com/spinkit/ -->
<template functional>
  <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  width: 70px;
  margin: 100px auto 0;
  text-align: center;
}

.spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: $color-h4;
  border-radius: 100%;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% { -webkit-transform: scale(0); }

  40% { -webkit-transform: scale(1); }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
