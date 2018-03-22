<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="header__logo">Remembership</h1>
      <user-options/>
    </header>
    <navigation/>
    <div class="main">
      <nuxt class="page-wrapper" />
    </div>
  </div>
</template>

<script>
import userOptions from "~/components/user-options/user-options.vue";
import navigation from "~/components/navigation/navigation.vue";
export default {
  components: {
    userOptions,
    navigation
  }
};
</script>


<style>
.page-enter-active, .page-leave-active {
  animation-duration: 0.25s;
  animation-fill-mode: both;
}
@keyframes enter {
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}
.page-enter-active {
  animation-name: enter;
}

@keyframes leave {
  from {
    opacity:1;
  }
  to {
    opacity:0;
  }
}
.page-leave-active {
  animation-name: leave;
}
</style>
