<template>
  <div class="user-options">
      <div class="user-options__trigger">
          <div class="user-options__greeting">
              Olá, <span class="user-options__username">Raphael</span>
          </div>
          <div class="user-options__thumbnail">
            <chevron-down class="user-options__chevron"/>
          </div>
      </div>
      <div class="user-options__dropdown"></div>
  </div>
</template>

<script>
import chevronDown from '~/components/icons/chevron-down.vue';
export default {
  components: {
    chevronDown
  }
}
</script>


<style lang="scss">
@import "~assets/styles/_variables.scss";
.user-options {
  color: var(--purple);
}
.user-options__trigger {
  display: flex;
  align-items: center;
  position: relative;
}
.user-options__chevron {
  display: block;
  width: 1.15em;
  height: 1.15em;
  background: var(--pink);
  border-radius: 50%;
  position: absolute;
  right: -0.5em;
  bottom: 0;
  path {
    fill: #ffffff;
  }
}

.user-options__greeting {
  font-size: 0.875em;
  margin-right: 0.5em;
}
.user-options__username {
  font-weight: bolder;
}
.user-options__thumbnail {
  background: red;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
}
</style>
