<template>
  <section class="subscription-page">
      <header class="page-header">
          <h2 class="page-header__title">Suas assinaturas</h2>
          <p class="page-header__big-text">Você está gastando <span class="price">R${{totalPrice.integer}}<sup>,{{totalPrice.decimal}}</sup></span><br/>
            em assinaturas online, por mês.</p>
          <p>Seu último plano adicionado: <nuxt-link to="/subscriptions/manage/fontbase">Fontbase</nuxt-link>, em 03 de Março.</p>
      </header>
      <div class="page-filters">
          <dropdown :options="typeDropdown"/>
          <dropdown :options="ordenationDropdown"/>
      </div>
      <div class="page-content subscriptions">
        <div class="subscriptions__wrapper">
          <button class="subscriptions__add">
          </button>
          <subscription-card
            v-for="(subscription, key) in subscriptions"
            :key="key"
            :subscription="subscription"/>
        </div>
      </div>
  </section>
</template>
<script>
import dropdown from "~/components/UI/dropdown/dropdown.vue";
import textInput from "~/components/UI/text-input/text-input.vue";
import subscriptionCard from "~/components/subscriptions/subscription-card.vue"
export default {
  data() {
    return {
      typeDropdown: [
        { label: "Todas as assinaturas", value: "all" },
        { label: "Video sob demanda", value: "video" }
      ],
      ordenationDropdown: [{ label: "Mais recentes primeiro" }],
      subscriptions: [
        {
          title:"Amazon Prime Video",
          type: {
            name:"Video sob demanda"
          },
          usage: {
            level:"5",
            text:"Uso muito frequente",
            icon:""
          },
          price:14.90,
          expiration:"29/01",
          discount: {
            price:7.90,
            endDate:"07/06"
          }
        },
        {
          title:"Netflix",
          type: {
            name:"Video sob demanda"
          },
          usage: {
            level:"5",
            text:"Uso muito frequente",
            icon:""
          },
          price:27.90,
          expiration:"29/01"
        },
        {
          title:"Medium",
          type: {
            name:"Leitura"
          },
          usage: {
            level:"1",
            text:"Uso muito raro",
            icon:""
          },
          price:5.00,
          expiration:"29/01",
          freeTrial: {
            endDate:"23/06"
          }
        }
      ]
    };
  },
  components: {
    dropdown,
    subscriptionCard,
    textInput
  },
  computed: {
    totalPrice() {
        let prices = [];
        for (let i=0; i<this.subscriptions.length; i++) {
          if (this.subscriptions[i].discount) {
            prices.push(this.subscriptions[i].discount.price);
          } else if (!this.subscriptions[i].freeTrial) {
            prices.push(this.subscriptions[i].price);
          }
        }
        let sum = prices.reduce((a,b) => a + b).toFixed(2);
        let price = {}
        price.integer = sum.substr(0, sum.indexOf('.')); 
        price.decimal = sum.substr(sum.indexOf('.')+1);
        return price;
    }
  }
};
</script>
<style lang="scss">
  @import "~assets/styles/_variables.scss";
  .subscriptions__wrapper {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:1em 1em;
  }
</style>

