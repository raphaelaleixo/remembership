<template>
  <div>
    <subscription-step class="subscription-step"
      v-for="(step,key) in steps"
      :key="key"
      :step="step"
      :class="{'step_taken':actualStep >= key+1}"/>                                          
  </div>
</template>

<script>
import subscriptionStep from "~/components/subscriptions/subscription-step.vue";
export default {
  components: {
    subscriptionStep
  },
  data() {
    return {
      steps: [
        { number: 1, text: "Escolha um serviço" },
        { number: 2, text: "Plano da assinatura" },
        { number: 3, text: "Vencimento" }
      ]
    };
  },
  props: {
    actualStep: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";
.subscription-step {
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.step__number {
  display: flex;
  height: 3em;
  width: 3em;
  margin-right: 1em;
  align-items: center;
  justify-content: center;
  color: var(--lightgray);
  background: rgba(0, 0, 0, 0);
  border: 2px solid var(--gray);
  border-radius: 50%;
  .step_taken & {
    border-color: var(--violet);
    background: var(--violet);
    color: #fff;
  }
}
.step__text {
  .step_taken & {
    color: var(--violet);
  }
}
</style>