<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item"
          v-for="(item,key) in navigationItems"
          :key="key"
          :id="'navId'+key">
        <nuxt-link :to="item.link" class="navigation__link">
          <component :is="item.icon" class="navigation__icon"/>
          <span class="navigation__text">{{item.label}}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import subscriptionIcon from "~/components/icons/subscriptions.vue";
import analysisIcon from "~/components/icons/analysis.vue";
import interviewIcon from "~/components/icons/interview.vue";
import catalogueIcon from "~/components/icons/catalogue.vue";
export default {
  components: {
    subscriptionIcon,
    analysisIcon,
    interviewIcon,
    catalogueIcon
  },
  data() {
    return {
      b: "",
      navigationItems: [
        { label: "Assinaturas", link: "/subscriptions", icon:"subscriptionIcon" },
        { label: "Análises", link: "/analysis", icon:"analysisIcon" },
        { label: "Pesquisa", link: "/interview", icon:"interviewIcon" },
        { label: "Catálogo", link: "/catalogue", icon:"catalogueIcon" }
      ]
    };
  }
};
</script>


<style lang="scss">
@import "~assets/styles/_variables.scss";

.navigation {
  position: relative;
  flex: 1;
}

.navigation__list {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  list-style-type: none;
  padding: 2.5em 0;
  margin: 0;
}

.navigation__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  color: var(--gray);
  font-weight: normal;
  text-decoration: none;
  position: relative;
  padding:1em 0;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 2px;
    height: 100%;
    border-radius: 10px;
    right:-1px;
    background: var(--pink);
    transition:all 0.15s ease-out;
    transform:scaleY(0);
  }
  &.nuxt-link-active {
    color: var(--pink);
  }
  &.nuxt-link-active:after {
    transform:scaleY(1);
  }
}

.navigation__icon {
  width: 2.5em;
  height: 2.5em;
  display: block;
  margin:0 auto 0.5em;
  path {
    fill: #c6c4c1;
    transition: all 0.3s;
  }
  .nuxt-link-active & path {
    fill: var(--pink);
  }
}

.navigation__text {
  font-size: 0.688em;
}
</style>

