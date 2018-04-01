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
  &:after {
    content:'';
    display:block;
    width:100%;
    height:1px;
    width:100%;
    margin:0 2em 0 1em;
    position: relative;
    top:2px;
    border-top:2px dotted var(--lightgray);
    flex-basis: 1;
    flex-shrink: 1;
  }
  &.step_taken:after {
    border-color:var(--violet);
  }
}
.step__number {
  display: flex;
  height: 3em;
  width: 3em;
  margin-right: 0.5em;
  align-items: center;
  justify-content: center;
  color: var(--lightgray);
  background: rgba(0, 0, 0, 0);
  border: 2px solid var(--gray);
  border-radius: 50%;
  flex-shrink:0;
  font-weight: bolder;
  .step_taken & {
    border-color: var(--violet);
    background: var(--violet);
    color: #fff;
  }
}
.step__text {
  flex-shrink:0;
  .step_taken & {
    color: var(--violet);
  }
}
</style>