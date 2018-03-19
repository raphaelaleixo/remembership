<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="header__logo">Remembership</h1>
      <user-options/>
    </header>
    <!-- <navigation/> -->
    <nuxt class="main"/>
  </div>
</template>

<script>
import userOptions from '~/components/user-options/user-options.vue'
export default {
  components: {
    userOptions
  }
}
</script>


<style>
</style>
