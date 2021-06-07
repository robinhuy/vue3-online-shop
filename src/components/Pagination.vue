<template>
  <div class="pagination flex-m flex-w p-t-26">
    <a
      href="#"
      @click="changePage(page, $event)"
      class="item-pagination flex-c-m trans-0-4"
      :class="{ 'active-pagination': page === pageIndex }"
      v-for="page in numberOfPages"
      :key="page"
      >{{ page }}</a
    >
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["length", "pageSize", "numberOfDisplayPages"],
  emits: ["change"],
  data() {
    return {
      numberOfPages: 0,
      pageIndex: 1,
    };
  },
  created() {
    this.numberOfPages = Math.ceil(this.length / this.pageSize);
  },
  methods: {
    changePage(page, event) {
      event.preventDefault();
      this.pageIndex = page;
      this.$emit("change", page);
    },
  },
};
</script>