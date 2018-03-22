<template>
  <button class="back-button" @click.prevent="goBack">
    <chevron-down/>
  </button>
</template>

<script>
  import chevronDown from '~/components/icons/chevron-down.vue';
  export default {
    components: {
      chevronDown
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }    
  }
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";
.back-button {
  margin-top:0.5em;
  width:3.25em;
  height:3.25em;
  background:none;
  border:1px solid var(--lightgray);
  border-radius:50%;
  transform:rotate(90deg);
  position:relative;
  cursor: pointer;
  transition:border 0.3s ease-out;
  svg {
    width:2.5em;
    height:2.5em;
    position:absolute;
    top:53%;
    left:50%;
    transform:translate(-50%,-50%);
  }
  path {
    fill: var(--pink);
  }
  &:hover {
    border-color: var(--pink);
  }
}
</style>
