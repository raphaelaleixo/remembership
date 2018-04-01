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
        <subscription-steps :actual-step="actualStep" class="subscription-steps"/>
      </div>
      <div class="page-filters">
          <text-input
            input-label="Procure por um nome"
            input-id="textFilter"
            v-model="textFilter"/>
          <dropdown :options="typeDropdown" v-model="categoryFilter"/>
      </div>
      <div class="page-content">
        <div class="subscription-services">
          <subscription-service
            v-for="(service, key) in filteredServices"
            :key="key"
            :service-name="service.name"
            :service-image="service.image"/>
        </div>
        <button class="button subscription-services__add">
          Não achou o serviço que você assina? <span class="subscription-services__highlight">Adicione manualmente</span> sua assinatura.
        </button>
      </div>
  </section>
</template>

<script>
import backButton from "~/components/navigation/back-button.vue";
import dropdown from "~/components/UI/dropdown/dropdown.vue";
import subscriptionService from "~/components/subscriptions/subscription-service.vue";
import subscriptionSteps from "~/components/subscriptions/subscription-steps.vue";
import textInput from "~/components/UI/text-input/text-input.vue";
export default {
  components: {
    backButton,
    dropdown,
    subscriptionService,
    subscriptionSteps,
    textInput
  },
  data() {
    return {
      actualStep: 1,
      categoryFilter: { value: "" },
      services: [
        {
          name: "Netflix",
          image:
            "https://cdn.iconscout.com/public/images/icon/free/png-256/netflix-logo-3c583be9512068c1-256x256.png",
          category: "video"
        },
        {
          name: "Amazon Prime",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
          category: "video"
        },
        {
          name: "Spotify",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Spotify_logo13.png",
          category: "music"
        }
      ],
      typeDropdown: [
        { label: "Todas as assinaturas", value: "" },
        { label: "Video sob demanda", value: "video" },
        { label: "Streaming de música", value: "music" }
      ],
      textFilter: ""
    };
  },
  computed: {
    filteredServices() {
      let filtered = this.services;
      let self = this;

      if (this.textFilter.length > 0) {
        filtered = filtered.filter(function(item) {
          let name = item.name.toLowerCase();
          return name.indexOf(self.textFilter.toLowerCase()) > -1;
        });
      }

      if (this.categoryFilter.value.length > 0) {
        filtered = filtered.filter(function(item) {
          return item.category.indexOf(self.categoryFilter.value) > -1;
        });
      }
      return filtered;
    }
  }
};
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";
.subscription-steps {
  display: flex;
}

.subscription-services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1em 1em;
}

.subscription-services__add {
  display: block;
  width: 100%;
  padding: 1em;
  font-family: inherit;
  background: #fff;
  color: var(--purple);
  border: none;
  cursor: pointer;
  margin: 1em 0;
}

.subscription-services__highlight {
  color: var(--pink);
}
</style>