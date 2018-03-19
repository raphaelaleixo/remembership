<template>
  <div class="dropdown">
      <div class="dropdown__trigger" :class="{'is-opened':isOpened}" tabindex="0" @click="toggleDropdown">{{selected}}</div>
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
export default {
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
      this.$emit("change", this.options[item]);
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
  display: inline-block;
  position: relative;
  min-width: 30%;
}
.dropdown__trigger {
  border: 1px solid #c6c4c1;
  line-height: 1;
  font-size: 0.875em;
  padding: 1em 4.5em 1em 1.5em;
  margin-left: -1em;
  border-radius: 1.5em;
  color: var(--gray);
  cursor: pointer;
  transition: border-color 0.3s ease-out, color 0.3s ease-out;

  &:hover,
  &:focus,
  &.is-opened {
    outline: none;
    color: var(--pink);
    border-color: var(--pink);
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



