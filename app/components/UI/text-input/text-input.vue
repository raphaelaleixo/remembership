<template>
  <div class="input-holder">
    <label class="input__label" :for="inputId">{{inputLabel}}</label>
    <input class="input"
      :id="inputId" :type="inputType" :name="inputName"
      v-model="val"/>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String
    },
    inputId: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      default: () => "Text"
    },
    inputLabel: {
      type: String,
      required: true
    },
    inputName: {
      type: String
    }
  },
  computed:{
    val: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input',val);
      }
    }
  }
};
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";

.input__label {
  color:var(--gray);
  position: absolute;
  left:0.5em;
  transform-origin: 0 0 0;
  line-height: 1;
  display: block;
  top:50%;
  font-size:0.875em;
  transform:translateY(-50%);
  transition:opacity 0.3s ease-out;
  pointer-events: none;
  .is-dirty & {
    opacity: 0;
  }
}

</style>


