<template>
  <router-link
    :to="to"
    v-slot="{ href, navigate, isActive, isExactActive }"
    custom
  >
    <li :class="[isActive && 'sale-noti', isExactActive && 'sale-noti']">
      <a :href="href" @click="navigate">{{ label }}</a>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["to", "label"],
};
</script>