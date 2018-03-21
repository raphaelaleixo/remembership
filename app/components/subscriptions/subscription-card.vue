<template>
  <div class="subscription-card">
    <div class="subscription-card__header">
      <div class="subscription-card__title">{{subscription.title}}</div>
    </div>
    <div class="subscription-card__content">
      <ul class="subscription-card__info">
        <li class="subscription-card__type">{{subscription.type.name}}</li>
        <li class="subscription-card__usage">{{subscription.usage.text}}</li>
      </ul>
    </div>
    <div class="subscription-card__footer">
      <div class="subscription-card__price price" v-if="!subscription.freeTrial">
        R$<span class="price__integer">{{composedPrice.integer}}</span><span class="price__decimal">,{{composedPrice.decimal}}</span>
        <div class="discount" v-if="hasDiscount">
          <span class="discount__icon">*</span>
          <div class="discount__info">R$ {{subscription.price.toFixed(2)}}<br/>a partir de {{subscription.discount.endDate}}</div>
        </div>
      </div>
      <div class="subscription-card__price price" v-else>
        <span class="price_free">Gratuito</span>
        <div class="discount">
          <span class="discount__icon">*</span>
          <div class="discount__info">R$ {{subscription.price.toFixed(2)}}<br/>a partir de {{subscription.freeTrial.endDate}}</div>
        </div>
      </div>
      <div class="subscription-card__expiration">Vence em: {{subscription.expiration}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subscription: {
      type: Object,
      required: true
    }
  },
  computed: {
    composedPrice() {
      let workingPrice = this.hasDiscount 
        ? this.subscription.discount.price
        : this.subscription.price;
      let composed = workingPrice.toFixed(2);
      let price = {};
      price.integer = composed.substr(0, composed.indexOf("."));
      price.decimal = composed.substr(composed.indexOf(".") + 1);
      return price;
    },
    hasDiscount() {
      return this.subscription.discount ? true : false;
    }
  }
};
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";
.subscription-card {
  background: #fff;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.subscription-card__header {
  padding-right: 3em;
  margin-bottom: auto;
}
.subscription-card__title {
  color: var(--purple);
  line-height: 1;
  font-size: 1.5em;
  letter-spacing: -0.5px;
}
.subscription-card__content {
  margin-top: 3em;
}
.subscription-card__info {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 0.875em;
}
.subscription-card__footer {
  margin: 1em -1em -1em -1em;
  padding: 1em;
  box-shadow: 0 -2px 7px -3px rgba(0, 0, 0, 0.15);
}
.subscription-card__price {
  font-weight: bolder;
  font-size: 1.125em;
  letter-spacing: -0.5px;
  line-height: 0.889em;
  margin-bottom: 0.25em;
}
.price_free,
.price__integer {
  font-size: 1.333em;
}
.price__decimal {
  font-size: 0.65em;
  vertical-align: super;
}
.subscription-card__expiration {
  font-size: 0.75em;
  color: var(--gray);
}
.discount {
  position: relative;
  display: inline-block;
  font-size: 0.889em;
  padding: 0.5em;
  margin: -0.5em 0 -0.5em -0.25em;
  cursor: pointer;
}
.discount__icon {
  color: var(--green);
  font-size: 1.5em;
  line-height: 1;
}
.discount__info {
  position: absolute;
  background: var(--green);
  color: #fff;
  width: auto;
  white-space: nowrap;
  padding: 1em 1.25em;
  font-size: 0.75em;
  letter-spacing: normal;
  top: calc(50% - 0.5em);
  left: 3em;
  border-radius: 3px;
  transform: translateY(-60%);
  box-shadow: 0 0 0.5em 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-out;
  .discount:hover & {
    opacity: 1;
    transform:translateY(-50%);
  }
  &:after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 6px 8px 6px 0;
    border-color: transparent var(--green) transparent transparent;
    position: absolute;
    left:-8px;
    top:50%;
    transform: translateY(-50%);
    z-index: 2;
  }
}
</style>