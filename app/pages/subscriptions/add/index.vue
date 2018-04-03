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
        {{newService}}
      </div>
      <div class="page-filters">
          <text-input
            input-label="Nome do serviço:"
            input-id="textFilter"
            v-model="textFilter"/>
          <dropdown :options="typeDropdown" v-model="categoryFilter"/>
      </div>
      <div class="page-content">
        <div class="subscription-services">
          <subscription-service
            v-for="(service, key) in filteredServices"
            :key="key"
            @click="addService(service.id)"
            :service-name="service.name"
            :service-id="service.id"
            :service-image="service.image"/>
        </div>
        <button class="button subscription-services__add" @click.prevent="addNewService()">
          Não achou o serviço que você assina? <span class="subscription-services__highlight">Adicione manualmente</span> sua assinatura.
        </button>
      </div>
      <div class="add">
        <dropdown :options="typeDropdown" v-model="newService.category"/>
        <text-input
          input-id="new-service-id"
          v-model="newService.name"/>
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
      newService: {
        name:'',
        id:'',
        category:''
      },
      services: [
        {
          name: "Netflix",
          id: "1",
          image:
            "https://cdn.iconscout.com/public/images/icon/free/png-256/netflix-logo-3c583be9512068c1-256x256.png",
          category: "video"
        },
        {
          name: "Amazon Prime",
          id: "2",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
          category: "video"
        },
        {
          name: "Spotify",
          id: "3",
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
        filtered = filtered.filter(
          item =>
            item.name.toLowerCase().indexOf(self.textFilter.toLowerCase()) > -1
        );
      }

      if (this.categoryFilter.length > 0) {
        filtered = filtered.filter(
          item => item.category.indexOf(self.categoryFilter) > -1
        );
      }

      return filtered;
    }
  },
  methods: {
    addService(id) {
      let self = this;
      this.newService = this.services.filter(item => item.id === id)[0];
      this.actualStep = 2;
    },
    addNewService() {
      this.newService = {
        name:'',
        category:''
      }
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