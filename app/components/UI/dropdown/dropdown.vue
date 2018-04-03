<template>
  <div class="input-holder dropdown">
      <div class="input dropdown__trigger" :class="{'is-opened':isOpened}" tabindex="0" @click="toggleDropdown">
        {{selected}}
        <chevron-down class="dropdown__arrow"/>
      </div>
      <transition name="fadeIn" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div class="dropdown__target" v-show="isOpened" :aria-hidden="!isOpened">
              <ul class="dropdown__options">
                  <li class="dropdown__item"
                      v-for="(item, key) in options"
                      :key="key"
                      :class="{'is-selected':selectedItem===key}"
                      @click="selectItem(key)">{{item.label}}
                  </li>
              </ul>
          </div>
      </transition>
  </div>
</template>

<script>
import chevronDown from '~/components/icons/chevron-down.vue';

export default {
  components: {
    chevronDown
  },
  data() {
    return {
      selectedItem: 0,
      isOpened: false
    };
  },
  model: {
    prop: "value",
    event: "change"
  },
  computed: {
    selected() {
      return this.options[this.selectedItem].label
    }
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.$emit("change", this.options[item].value);
      this.isOpened = false;
      this.$el.blur();
    },
    toggleDropdown() {
      this.isOpened = !this.isOpened;
    },
    hideDropdown(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpened = false;
        this.$el.blur();
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.hideDropdown, false);
  },
  destroyed() {
    document.removeEventListener("click", this.hideDropdown, false);
  }
};
</script>

<style lang="scss">
@import "~assets/styles/_variables.scss";

.dropdown {
  cursor: pointer;
}

.dropdown__arrow {
  position: absolute;
  width:1.5em;
  height:1.5em;
  right:1em;
  top:50%;
  transform:translateY(-50%);
  path {
    fill: var(--gray);
  }
}


.dropdown__target {
  position: absolute;
  margin-top: 1em;
  border-radius: 4px;
  padding: 1em;
  width: auto;
  box-shadow: 0 0 0.5em 0 rgba(0, 0, 0, 0.2);
  background: #fff;
  min-width: 100%;
}
.dropdown__options {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.dropdown__item {
  font-size: 0.875em;
  color: var(--purple);
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 0.75em;
  }
  &:hover {
    text-decoration: underline;
  }
  &.is-selected {
    font-weight: bolder;
    pointer-events: none;
  }
}
.animated {
  animation-duration: 0.35s;
  animation-fill-mode: both;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-1em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fadeIn {
  animation-name: fadeIn;
}
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-1em);
  }
}
.fadeOut {
  animation-name: fadeOut;
}
</style>



