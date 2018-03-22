<template>
  <section class="subscription-page">
      <div class="page-back">
        <back-button/>
      </div>
      <header class="page-header">
          <h2 class="page-header__title">Assinaturas</h2>
          <p class="page-header__big-text">Adicionar assinatura</p>
      </header>
      <div class="page-content">
        <subscription-steps :actualStep="actualStep" class="subscription-steps"/>
      </div>
  </section>
</template>

<script>
  import backButton from '~/components/navigation/back-button.vue';
  import subscriptionSteps from '~/components/subscriptions/subscription-steps.vue';
  export default {
    components: {
      backButton,
      subscriptionSteps
    },
    data() {
      return {
        actualStep: 1
      }
    }
  }
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";
.subscription-steps {
  display:flex;
}
</style>