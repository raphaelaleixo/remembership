<template>
  <button class="subscription-service button">
    <div class="subscription-service__image" :style="{backgroundImage:'url('+serviceImage+')'}"></div>
    <div class="subscription-service__text">{{serviceName}}</div>
  </button>
</template>

<script>
  export default {
    props: {
      serviceImage: {
        type: String,
      },
      serviceName: {
        type:String
      }
    },
  }
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";
.subscription-service__image {
  width:6em;
  height:6em;
  margin:1em 0;
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>