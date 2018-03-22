<template>
  <div>
    <div class="step__number">{{step.number}}</div>
    <div class="step__text">{{step.text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type:Object,
      required:true
    }
  }
};
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";

</style>
