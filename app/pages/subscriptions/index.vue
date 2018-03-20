<template>
  <section>
      <header class="page-header">
          <h2 class="page-header__title">Suas assinaturas</h2>
          <p class="page-header__big-text">Você está gastando <span class="price">R$287<sup>,90</sup></span><br/>
            em assinaturas online, por mês.</p>
          <p>Seu último plano adicionado: <nuxt-link to="/subscriptions/manage/fontbase">Fontbase</nuxt-link>, em 03 de Março.</p>
      </header>
      <div class="page-filters">
          <dropdown :options="typeDropdown"/>
          <dropdown :options="ordenationDropdown"/>
      </div>
  </section>
</template>
<script>
import dropdown from "~/components/UI/dropdown/dropdown.vue";
import textInput from "~/components/UI/text-input/text-input.vue";
export default {
  data() {
    return {
      typeDropdown: [
        { label: "Todas as assinaturas", value: "all" },
        { label: "Video sob demanda", value: "video" }
      ],
      ordenationDropdown: [{ label: "Mais recentes primeiro" }]
    };
  },
  components: {
    dropdown,
    textInput
  }
};
</script>
