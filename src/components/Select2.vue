<template>
  <div class="select">
    <div
      class="selection"
      @click="toggleDropdown"
      @blur="closeDropdown"
      tabindex="0"
    >
      <span class="selection-label">
        {{ localSelected.label }}
      </span>

      <span class="selection-arrow"
        ><b :class="{ open: isShowDropdown }"></b
      ></span>
    </div>

    <ul v-show="isShowDropdown" class="options">
      <li
        v-for="option in localOptions"
        :key="option.value"
        @mousedown="select(option)"
        class="option"
        :class="{ selected: option.value === localSelected.value }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Select2",
  props: ["selected", "options"],
  data() {
    return {
      isShowDropdown: false,
      localSelected: this.selected,
      localOptions: this.options,
    };
  },
  methods: {
    toggleDropdown() {
      this.isShowDropdown = !this.isShowDropdown;
    },
    select(option) {
      this.localSelected = option;
    },
    closeDropdown() {
      this.isShowDropdown = false;
    },
  },
};
</script>

<style scoped>
.select {
  position: relative;
}
.selection {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
  user-select: none;
  -webkit-user-select: none;
}
.selection-label {
  display: block;
  padding-left: 8px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.selection-arrow {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
  height: 26px;
}
.selection-arrow > b {
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
}
.selection-arrow > b.open {
  border-color: transparent transparent #888 transparent;
  border-width: 0 4px 5px 4px;
}
.options {
  position: absolute;
  top: 26px;
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}
.option {
  padding: 6px;
  background-color: #ddd;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}
.option:hover {
  background-color: #e65540;
  color: #fff;
}
</style>